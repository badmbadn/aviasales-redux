import { Component } from 'react';

export default class Service extends Component {
  _id = '4847a4b3da0c43d0cec7b47d7c387d93';
  _url = 'https://aviasales-test-api.kata.academy/';

  async getSearchId() {
    const res = await fetch(`${this._url}search`);
    if (!res.ok) {
      throw new Error(`error, ${res.status}`);
    }
    return res.json();
  }

  async sendAllRequest(id) {
    let res;
    try {
      res = await fetch(`${this._URL}tickets?searchId=${id}`);
      if (res.status === 500) {
        throw new Error('500');
      }
    } catch (e) {
      if (e.message === '500') {
        res = this.sendAllRequest(id);
        return res;
      }
      throw new Error();
    }
    return res;
  }
  async getTickets(id) {
    const res = await this.sendAllRequest(id);
    return res.json();
  }
}
