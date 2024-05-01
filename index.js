const Orders=[
    {
        ProductName:'JavaScript',
        ProductNumber: '545645',
        PaymentStatus:'Due',
        Status:'Pendig',
    },
    {
        ProductName:'React ',
        ProductNumber: '23745',
        PaymentStatus:'Refunded',
        Status:'Declined',
    },
    {
        ProductName:'NodeJs',
        ProductNumber: '113555',
        PaymentStatus:'Paid',
        Status:'Acive',
    },
]


Orders.forEach((order)=>{
    const tr = document.createElement('tr');
    const trContent=
    `<td>${order.ProductName}</td>
    <td>${order.ProductNumber}</td>
    <td>${order.PaymentStatus}</td>
    <td class="${order.Status === 'Pending' ? 'danger ':order.Status=== 'pending'?'warning' :'Primary'} ">${order.Status}</td>
    <td class="primary">Details</td>
    `;

    tr.innerHTML= trContent;
    document.querySelector('table tbody').appendChild(tr);
})

