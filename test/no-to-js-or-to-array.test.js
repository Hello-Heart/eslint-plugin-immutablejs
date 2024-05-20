const {RuleTester} = require("eslint");
const noJsOrToArrayRule = require("../lib/rules/no-to-js-or-to-array")

var ruleTester = new RuleTester();

ruleTester.run(
    "no-to-js-or-to-array",
    noJsOrToArrayRule,
    {
        valid:[
            {
                code: "userData.get();",
                errors: 0
            }],
        invalid: [
            {
                code: "userData.toJS();",
                errors: 1
            },
            {
                code: "usersList.toArray()",
                errors: 1
            }
        ]
    }
)

console.log("All tests passed!");
