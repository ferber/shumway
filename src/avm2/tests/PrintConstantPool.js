load("../DataView.js");
load("../constants.js");
load("../parser.js");
try {
    var abc = parseAbcFile(snarf(arguments[0], "binary"));
    print("Constant pool for: " + arguments[0]);
    print(JSON.stringify(abc.constants, null, 2));
} catch (e) {
    print(e);
    print(e.stack);
}
