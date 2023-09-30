# Sees if there's any errors parsing the programs using the grammar
for file in $(ls examples); do
    output=$(cat examples/$file | antlr4-parse grammar/WDTPD.g4 prog);
    if [ -n "$output" ]; then
        echo "Error parsing $file: $(echo $output | wc -l)"
    fi
done
