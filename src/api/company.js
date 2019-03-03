import axios from './axios'
import toaster from '@/toaster'

export default {
	get(){
		return new Promise((resolve, reject) => {
	        axios({
	        	method: 'GET',
	        	headers: { 'content-type': 'application/x-www-form-urlencoded' },
	        	url: 'companies/'
	        })
			.then(data => {
				resolve(data.data.companies)
			})
			.catch(err => {
				toaster.error(err);
				reject()
			})
	    })
	},
    store(payload){
    	return new Promise((resolve, reject) => {
	        axios.post('companies/', payload)
	          .then(data => {
				toaster.success(data.data.message);
	          	resolve(data.data.company)
	          })
	          .catch(err => {
	          	toaster.error(err);
	          	reject()
	          })
	    })
	},
    update(company, payload){
    	return new Promise((resolve, reject) => {
	        axios.put(`companies/${company}/`, payload)
	          .then(data => {
				toaster.success(data.data.message);
	          	resolve(data.data.company)
	          })
	          .catch(err => {
	          	toaster.error(err);
	          	reject()
	          })
	    })
	},
	getBills(company){
		return new Promise((resolve, reject) => {
	        axios({
	        	method: 'GET',
	        	headers: { 'content-type': 'application/x-www-form-urlencoded' },
	        	url: `companies/${company}/bills/`
	        })
			.then(data => {
				resolve(data.data)
			})
			.catch(err => {
				toaster.error(err);
				reject()
			})
	    })
	},
	addBill(company, payload){
		return new Promise((resolve, reject) => {
	        axios.post(`companies/${company}/bills/`, payload)
	          .then(data => {
				toaster.success(data.data.message);
	          	resolve(data.data.bill)
	          })
	          .catch(err => {
	          	toaster.error(err);
	          	reject()
	          })
	    })
	},
	updateBill(company, bill, payload){
		return new Promise((resolve, reject) => {
	        axios.put(`companies/${company}/bills/${bill}/`, payload)
	          .then(data => {
				toaster.success(data.data.message);
	          	resolve(data.data.bill)
	          })
	          .catch(err => {
	          	toaster.error(err);
	          	reject()
	          })
	    })
	}
}