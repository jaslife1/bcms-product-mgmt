/**
 * @generated SignedSource<<2bf224b5775a37c5c24d37f31a1e6e13>>
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
    "name": "employee"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "employee",
        "variableName": "employee"
      }
    ],
    "concreteType": "Employee",
    "kind": "LinkedField",
    "name": "addNewEmployee",
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
        "name": "idNumber",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "PersonalInformation",
        "kind": "LinkedField",
        "name": "personalInformation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "firstName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "middleName",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Address",
        "kind": "LinkedField",
        "name": "address",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "address1",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "address2",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "barangay",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "city",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "province",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "country",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "zipcode",
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
    "name": "AddNewEmployeeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddNewEmployeeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "92783942b2838a16d60ff0ca98fe4984",
    "id": null,
    "metadata": {},
    "name": "AddNewEmployeeMutation",
    "operationKind": "mutation",
    "text": "mutation AddNewEmployeeMutation(\n  $employee: NewEmployee!\n) {\n  addNewEmployee(employee: $employee) {\n    id\n    idNumber\n    personalInformation {\n      firstName\n      lastName\n      middleName\n    }\n    address {\n      address1\n      address2\n      barangay\n      city\n      province\n      country\n      zipcode\n    }\n  }\n}\n"
  }
};
})();

node.hash = "66d6124f8aab98f3e1848813536dd165";

module.exports = node;
