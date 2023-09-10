
// request to localhost:8080/customers?search={searchTerm}

import axios from 'axios';

const API_URL = 'http://localhost:8080';

export function getCustomers(searchTerm) {
  return axios.get(`${API_URL}/customer?search=${searchTerm}`)
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(_ => {
      console.error("Nothing found");
      return [];
    });
}

export function addCustomer(customer) {
  return axios.post(`${API_URL}/dash/settings/${customer}`)
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(_ => {
      console.error("Nothing found");
      return [];
    });
}

export function getDashboardData() {
  return axios.get(`${API_URL}/dash`)
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(_ => {
      console.error("Nothing found");
      return [];
    });
}

export function removeStoreFromDash(index) {
  return axios.delete(`${API_URL}/dash/settings/${index}`)
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(_ => {
      console.error("Nothing found");
      return [];
    });
}
