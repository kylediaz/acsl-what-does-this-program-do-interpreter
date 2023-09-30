python3 -m venv .venv
source .venv/bin/activate
pip install antlr4-tools > /dev/null

(cd ./grammar; antlr4 -Dlanguage=JavaScript -o "../parser" "WDTPD.g4")
# I don't want to use NPM so I replace all references to the antlr4 NPM package with a CDN
sed -i -e "s|import antlr4 from 'antlr4';|import antlr4 from 'https://cdn.jsdelivr.net/npm/antlr4@4.13.1/+esm'|g" parser/*