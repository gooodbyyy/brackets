module.exports = function check(string, bracketsConfig) {
    string = string.replace(/[^{(|\[\]||)}]/g, "");
    while (/(\(\)|\{\}|\[\]|\|\|)/.test(string)) string = string.replace("{}", "").replace("[]", "").replace("()", "").replace("||", "");
    return string == ""
}