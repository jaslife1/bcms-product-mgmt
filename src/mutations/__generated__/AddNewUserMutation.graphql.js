/**
 * @generated SignedSource<<52058f6232fb860a897a292b2bb66ab4>>
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
    "name": "user"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "user",
        "variableName": "user"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "addNewUser",
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
        "name": "username",
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
    "name": "AddNewUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddNewUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "235a4b929fc1fb6e34ea5ea2947c2680",
    "id": null,
    "metadata": {},
    "name": "AddNewUserMutation",
    "operationKind": "mutation",
    "text": "mutation AddNewUserMutation(\n  $user: NewUser!\n) {\n  addNewUser(user: $user) {\n    id\n    employeeId\n    username\n    access\n  }\n}\n"
  }
};
})();

node.hash = "6134137c5e4361415e1ceedf61bceb96";

module.exports = node;
