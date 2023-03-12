/**
 * @generated SignedSource<<ef3b735814727833b301832fd4de4b72>>
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
    "concreteType": "UserLoginPayload",
    "kind": "LinkedField",
    "name": "loginUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
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
    "name": "LogInUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LogInUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f9c5bf0efea333301d5305dcc6f445b5",
    "id": null,
    "metadata": {},
    "name": "LogInUserMutation",
    "operationKind": "mutation",
    "text": "mutation LogInUserMutation(\n  $user: UserLogin!\n) {\n  loginUser(user: $user) {\n    token\n    user {\n      id\n    }\n  }\n}\n"
  }
};
})();

node.hash = "41224d8da6da7c2577b15ece5f5b0a76";

module.exports = node;
