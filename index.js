const headingelement = document.querySelector("#headingtotal"); //

const inputdisc = document.querySelector("#inputdisc");

const inputelement = document.querySelector("#inputamount");

const expenseTableEL = document.querySelector("#expenseTable");

const allexpenses = []; // item + amount = whole

let totalExpense = 0;  //total amount in number


function addexpenseToTotal() {
  expenceitem = {};
  const textamount = inputelement.value;
  const textdesc = inputdisc.value;
  const expenses = parseInt(textamount, 10);
  expenceitem.desc = textdesc;
  expenceitem.amount = expenses;
  expenceitem.moment = new Date();
  allexpenses.push(expenceitem);
  renderList(allexpenses);
  totalExpense = totalExpense + expenses;
  updatetotal();
}
function getDateString(momento) {
  return momento.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
function updatetotal() {
  const sometext = `Total ${totalExpense}`;
  headingelement.textContent = sometext;
}
// const data1 = allexpenses[0];
// const data2 = allexpenses[1];

// const data1text= `${data1.desc} :: ${data1.amount}`;
// const data2text= `${data2.desc} :: ${data2.amount}`;

//   const tabletext =`<div>${data2text}</div>
//   <div>${data2text}</div>`
function deleteitem(datevalue) {
  const Newarr = [];
  for (let i = 0; i < allexpenses.length; i++) {
    if (allexpenses[i].moment.valueOf() !== datevalue) {
      Newarr.push(allexpenses[i]);
    }
  }
  const allexpensesHTML = Newarr.map(expenses => creatlistitem(expenses));
  const joinedallhtml = allexpensesHTML.join(" ");
  expenseTableEL.innerHTML = joinedallhtml;
}

function renderList(arrofelements) {
  const allexpensesHTML = allexpenses.map(expenses => creatlistitem(expenses));
  const joinedallhtml = allexpensesHTML.join(" ");
  expenseTableEL.innerHTML = joinedallhtml;
}

function creatlistitem({ amount, desc, moment }) {
  return `<li class="list-group-item d-flex justify-content-between">
          <div class="d-flex flex-column">
          ${desc}
            <small class="text-muted">${getDateString(moment)}</small>
          </div>
          <div>
            <span class="px-5">
              ${amount}
            </span>
            <button type="button" class="btn btn-outline-danger btn-sm"
            onclick="deleteitem(${moment.valueOf()})"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </li>`;
}
const element = document.querySelector("#btnaddexpense");

element.addEventListener("click", addexpenseToTotal);
