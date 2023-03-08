/**
 * @generated SignedSource<<f3af15c1b2872fc7723864501ef5a948>>
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
    "name": "sale"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "sale",
        "variableName": "sale"
      }
    ],
    "concreteType": "Sale",
    "kind": "LinkedField",
    "name": "addNewSale",
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
    "name": "AddNewSaleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddNewSaleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "43826aac8350e7c809aeac5c10b7921f",
    "id": null,
    "metadata": {},
    "name": "AddNewSaleMutation",
    "operationKind": "mutation",
    "text": "mutation AddNewSaleMutation(\n  $sale: NewSale!\n) {\n  addNewSale(sale: $sale) {\n    id\n  }\n}\n"
  }
};
})();

node.hash = "12217b1d5529c0b2efdfc3c0c935c573";

module.exports = node;
