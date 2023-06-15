#!/bin/bash

# Loop over each data.ts file in the pages directory
for file in $(find pages -name 'data.ts'); do
    # Append the content of data.ts file to index.ts
    cat $file >> bin/mockData/index.ts
    echo "" >> bin/mockData/index.ts

    # Remove the data.ts file
    rm $file
done
