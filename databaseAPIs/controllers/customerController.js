const Customers = require("../models/customers");

exports.getAll = (req, res) => { //WORKING
   Customers.fetchAll().then((results) => {
       res.json(results[0]);
   })
};

exports.getCustomer = (req, res) => { //WORKING
    Customers.fetchCustomer(req.params.id).then((results) => {
        res.json(results[0]);
    })
}

exports.add = (req, res) => {
    Customers.add(req.body);
}

// exports.postAddCustomer =(req, res) => { //not worked on
//     let n = req.body.CustomerName;
//     let e = req.body.CustomerEmail;
//     const customer = new Customer(n, e);
//     customer.save()
//     res.redirect('customers'
//     )
// }

exports.postUpdateCustomer = (req, res) => { //not worked on
    let id = req.body.CustomerID;
    let n = req.body.CustomerName;
    let e = req.body.CustomerEmail;

    const customer = new Customer( n, e);
    customer.updateCustomer( id ).then (() =>{
        res.redirect('customers');
    }).catch ( err => {
        console.log("What the heck ->");
        console.log(err)
    })
}
exports.updateCustomer = (req, res) => { //not worked on
    let id = req.params.id;
    Customer.findById(id)
        .then ((rows) =>{
            res.render( 'UpdateCustomer', {
                title : `Update Customer: ${id} `,
                id : rows[0].id,
                from: 'customer',
                product: rows[0][0]
            })
        }).catch( err => {
        console.log( "DB Error=>");
        console.log( err );
    })
}

exports.getUpdateCustomer = (req, res) => { //not worked on
    let id = req.params.id;
    Customer.findById(id)
        .then ((rows) =>{
            res.render( 'updateCustomer', {
                title : `Update Customer: ${id} `,
                id : rows[0].id,
                from: 'customer',
                customer: rows[0][0]
            })
        }).catch( err => {
        console.log( "DB Error=>");
        console.log( err );
    })
}

exports.postCustomer = (req, res) => { //not worked on
    res.render('customers', {
        from: 'customers'
    })
}

