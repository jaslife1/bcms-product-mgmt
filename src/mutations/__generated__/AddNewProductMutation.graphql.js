/**
 * @generated SignedSource<<5a4925d9ba390d293815626c9bd93f07>>
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
    "name": "product"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "product",
        "variableName": "product"
      }
    ],
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "addNewProduct",
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
    "name": "AddNewProductMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddNewProductMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c3eef42dac40f632f30851ded80232b8",
    "id": null,
    "metadata": {},
    "name": "AddNewProductMutation",
    "operationKind": "mutation",
    "text": "mutation AddNewProductMutation(\n  $product: NewProduct!\n) {\n  addNewProduct(product: $product) {\n    id\n  }\n}\n"
  }
};
})();

node.hash = "a6c737e585b12fa6c336151c40c04bfc";

module.exports = node;
