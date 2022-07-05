var link= document.createElement("LINK"); link.setAttribute("rel", "stylesheet"); link.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"); document.getElementsByTagName("head")[0].appendChild(link);
var script = document.createElement("SCRIPT"); script.setAttribute("type", "text/javascript"); script.setAttribute("src", "https://pyscript.net/alpha/pyscript.js"); document.getElementsByTagName("head")[0].appendChild(script);
var env = document.createElement("py-env"); env.innerHTML="- matplotlib"; document.getElementsByTagName("head")[0].appendChild(env);
var py = document.createElement("DIV");
py.innerHTML = '<py-script output="plot">\nimport matplotlib.pyplot as plt\nfrom js import result\nqueryresult =result.get("records")\narrayfvar = []\narraysecvar = []\nfor i in queryresult:\n valfv = i.get("Amount")\n arrayfvar.append(valfv)\n valsecvar = i.get("Probability")\n arraysecvar.append(valsecvar)\nfig, ax = plt.subplots()\nplt.bar(arrayfvar,arraysecvar)\nplt.title("ghanshyam")\nfig\n</pyscript>'
document.getElementsByTagName("head")[0].appendChild(py)
