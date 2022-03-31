n = 5;
var string = "";
for (i = 0; i < n; i++) {
    for (j = 0; j <= n; j++) {
        if ((i + j <= n - 1)) {
            string += " "
        }
        else {
            string += "@"
        }
    }
    string += "\n"
}

for (i = 0; i < n; i++) {
    string += "      "
    for (j = 0; j <= n; j++) {
        if ((i + j >= n)) {
            string += " "
        }
        else {
            string += "@"
        }
    }
    string += "\n"
}
console.log(string)
