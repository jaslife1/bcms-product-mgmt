/**
 * @generated SignedSource<<77a4f2c3c9e4262623de161ae57a7f2c>>
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
    "name": "production"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "production",
        "variableName": "production"
      }
    ],
    "concreteType": "Production",
    "kind": "LinkedField",
    "name": "addNewProduction",
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
        "name": "batchCode",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "dateAdded",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "quantity",
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
    "name": "AddNewProductionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddNewProductionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5c101a4edbafc0b47f1fef0a53efdeb6",
    "id": null,
    "metadata": {},
    "name": "AddNewProductionMutation",
    "operationKind": "mutation",
    "text": "mutation AddNewProductionMutation(\n  $production: NewProduction!\n) {\n  addNewProduction(production: $production) {\n    id\n    productId\n    batchCode\n    dateAdded\n    quantity\n  }\n}\n"
  }
};
})();

node.hash = "633b63c05cb3af93e2c4be97c6d8cab0";

module.exports = node;
