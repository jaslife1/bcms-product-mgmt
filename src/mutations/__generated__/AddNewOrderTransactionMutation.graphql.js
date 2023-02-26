/**
 * @generated SignedSource<<c37aa50a5ddcb1c65c5a14ff518efdc3>>
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
    "name": "newOrder"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "newOrder",
        "variableName": "newOrder"
      }
    ],
    "concreteType": "OrderTransaction",
    "kind": "LinkedField",
    "name": "addNewOrderTransaction",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddNewOrderTransactionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddNewOrderTransactionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "de2e415c91d395e031e52fab3225ed08",
    "id": null,
    "metadata": {},
    "name": "AddNewOrderTransactionMutation",
    "operationKind": "mutation",
    "text": "mutation AddNewOrderTransactionMutation(\n  $newOrder: NewOrderTransaction!\n) {\n  addNewOrderTransaction(newOrder: $newOrder) {\n    id\n  }\n}\n"
  }
};
})();

node.hash = "eb01f944edd76c017df7fa06574da009";

module.exports = node;
