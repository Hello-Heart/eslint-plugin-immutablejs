module.exports = {
    meta: {
      type: "problem",
      docs: {
        description: "disallow usage of toJS() and toArray() methods",
        category: "Best Practices",
        recommended: true
      },
      schema: [] // no options
    },
    create: function (context) {
      return {
        MemberExpression(node) {
          const methodName = node.property.name;
          if (methodName === "toJS" || methodName === "toArray") {
            context.report({
              node,
              message: "Usage of {{ methodName }}() is not allowed",
              data: {
                methodName
              }
            });
          }
        }
      };
    }
  };
  