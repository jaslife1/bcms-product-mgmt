/**
 * @generated SignedSource<<d92a84bf69ca50cdc806cf67166d614b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProductListPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "products",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Product_product"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProductListPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "products",
        "plural": true,
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
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sku",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "barcode",
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
    ]
  },
  "params": {
    "cacheID": "722359934b3e08918a6ea7b4eb0c1dc9",
    "id": null,
    "metadata": {},
    "name": "ProductListPageQuery",
    "operationKind": "query",
    "text": "query ProductListPageQuery {\n  products {\n    ...Product_product\n    id\n  }\n}\n\nfragment Product_product on Product {\n  id\n  name\n  description\n  sku\n  barcode\n  dateAdded\n}\n"
  }
};

node.hash = "de8b81583cb33488533f99104f4c7011";

module.exports = node;
