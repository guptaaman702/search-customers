# mypluralize
A Node.js module that will search the customers within 100km range of Dublin Area for inviting them for food and drinks.
## Installation 
```sh
npm install search-customers --save
yarn add search-customers
bower install search-customers --save
```
## Usage
### Javascript
```javascript
var search_customers = require('search-customers');
var customers_list = search_customers.find_customers(customers_records,dublin_latitude,dublin_longitude);
```
```sh
Output should be 'customers_list' whose distance is less than or
equal to 100KM.
```
### TypeScript
```typescript
import { find_customers } from 'search-customers';
console.log(find_customers(customers_records,dublin_latitude,dublin_longitude))
```
```sh
Output should be 'customers_list' whose distance is less than or
equal to 100KM.
```
## Test 
```sh
npm run test
```