define(['./utils','./entity'],function(Utils,Entity){
  class EntityManager {

    queryTemplates = [];
    queryResults = [];

    registerQueryTemplate(template) {
      //  First, look for existing templates
      const matches = (qt) => Utils.setEq(template, qt)
      let idx = this.queryTemplates.find(matches)

      //  If a match is found, return the index of that query
      if (typeof idx !== 'undefined') return this.queryResults[idx]

      //  Add a system's queries to the manager's list
      this.queryTemplates.push(template);
      let result = new Set();
      this.queryResults.push(result);

      //  Return the index of the new query pair
      return result;

      //  If systems are added post-entity creation,
      //  the query may be out of sync if no further action is taken
    }


    addEntity(){
      //  Returns an empty object - A new entity
      return new Entity();
    }


    addComponents(entity, ...components){
      //  Adds components to entities
      components.forEach(component => {
        entity[component.constructor.name] = component
      });

      //  Updates cached queries
      this.matchesQueryIndecies(entity).forEach((idx) => {
        //  query.entities is a set, so duplicates are ignored
        this.queryResults[idx].add(entity)
      });
    }


    removeComponents(entity, componentTypes){
      //  Track which queries match before component removal
      let beforeIdxs = matchesQueryIndecies(entity)

      //  Remove given components
      componentTypes.forEach((componentType) => {
        delete entity[componentType]
      });

      //  Calculate queries which no longer match entity
      let afterIdxs = this.matchesQueryIndecies(entity)
      let outdatedIdxs = new Set([...beforeIdxs].filter(x => !afterIdxs.has(x)))

      //  Update cached queries
      outdatedIdxs.forEach((idx) => {
        this.queryResults[idx].delete(entity);
      });
    }


    deleteEntity(entity){
      //  Delete entity from cached queries
      let queryIdxs = this.matchesQueryIndecies(entity);
      queryIdxs.forEach((idx) => {
        this.queryResults[idx].delete(entity);
      });

      for (let member in entity) delete entity[member]
    }


    matchesQueryIndecies(entity){
      //  Return a set of query indecies which match the entity

      //  Get a list of components on the entity
      let components = new Set(Object.keys(entity))

      //  this lambda returns true if the component type is found on the entity
      const componentMatches = (componentType) => components.has(componentType);

      //  Iterate through all registered queries to determine matches
      let matchingIdxs = new Set();
      this.queryTemplates.forEach( (template,i) => {
        if( [...template].every(componentMatches)){
          matchingIdxs.add(i);
        }
      });

      return matchingIdxs;
    }
  }

  return EntityManager
})
