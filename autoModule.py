import os

def writeDef(script_rel_dir,def_rel_dir,def_file):
    # Get a list of component files
    componentFile = [f for f in os.listdir(script_rel_dir) if os.path.isfile(os.path.join(script_rel_dir, f))]
    # Strip the '.js' from the end of the filename
    componentName = [c[:-3] for c in componentFile]
    # Prepend '../' to get relative filenames
    relFilenames = [def_rel_dir + c for c in componentName]

    # Write the components list to ./public/ecs/components.js
    with open(def_file,'w') as compFile:
        compFile.write('define(' + str(relFilenames) +',\n')
        compFile.write('    function(' + str(componentName)[1:-1].replace("'","") +'){\n')
        compFile.write('        return {\n')
        for name in componentName:
            compFile.write('            ' + name +":"+name+",\n")
        compFile.write('        }\n')
        compFile.write('    })')

def main():
    writeDef('./public/ecs/components/','./components/','./public/ecs/components.js')
    writeDef('./public/ecs/systems/','./systems/','./public/ecs/systems.js')

if __name__ == '__main__':
    main()
