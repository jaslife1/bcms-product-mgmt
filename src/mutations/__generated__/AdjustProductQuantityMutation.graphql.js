/**
 * @generated SignedSource<<67aa632e25e59bf16772bf678c84187a>>
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
    "name": "adjustment"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "adjustment",
        "variableName": "adjustment"
      }
    ],
    "concreteType": "Adjustment",
    "kind": "LinkedField",
    "name": "adjustProductQuantity",
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
        "name": "productId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "quantity",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "dateAdded",
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
    "name": "AdjustProductQuantityMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AdjustProductQuantityMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "455dc61f9e4511294e968868a92c7269",
    "id": null,
    "metadata": {},
    "name": "AdjustProductQuantityMutation",
    "operationKind": "mutation",
    "text": "mutation AdjustProductQuantityMutation(\n  $adjustment: NewAdjustment!\n) {\n  adjustProductQuantity(adjustment: $adjustment) {\n    id\n    productId\n    quantity\n    dateAdded\n  }\n}\n"
  }
};
})();

node.hash = "195d348c07ca5d3bdf006fe803e957a6";

module.exports = node;
