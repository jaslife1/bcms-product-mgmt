/**
 * @generated SignedSource<<3ce747685d3aa9cf4f715f37f45c09df>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "newPassword"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "newPassword",
        "variableName": "newPassword"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "changePassword",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "employeeId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "access",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ChangePasswordMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ChangePasswordMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f36d8412a2c2bc3a946ce08e867c92d6",
    "id": null,
    "metadata": {},
    "name": "ChangePasswordMutation",
    "operationKind": "mutation",
    "text": "mutation ChangePasswordMutation(\n  $newPassword: ChangePassword!\n) {\n  changePassword(newPassword: $newPassword) {\n    id\n    employeeId\n    access\n  }\n}\n"
  }
};
})();

node.hash = "203e990667fc76a8a220609b6efc13f3";

module.exports = node;
