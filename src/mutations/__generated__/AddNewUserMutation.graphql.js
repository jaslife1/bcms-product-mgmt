/**
 * @generated SignedSource<<1547d73c8e6486a3f7c4e5d0ea8984f8>>
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
    "cacheID": "0f26ae53bf31bde25307f0a7c492cb50",
    "id": null,
    "metadata": {},
    "name": "AddNewUserMutation",
    "operationKind": "mutation",
    "text": "mutation AddNewUserMutation(\n  $user: NewUser!\n) {\n  addNewUser(user: $user) {\n    id\n    employeeId\n    access\n  }\n}\n"
  }
};
})();

node.hash = "f217cd1f0f71cda13ed67b8b6da15023";

module.exports = node;
