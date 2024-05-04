const disp = document.getElementById('disp');

function appendToDisplay(input)
{
	if(disp.value == 0)
	{
		disp.value=input;
	}
	else 
	{
		disp.value+=input;		
	}
}

function clearDisplay()
{
	disp.value = "0";
}

function calculate()
{
	try
	{
		disp.value = eval(disp.value);
	}
	catch(error)
	{
		disp.value = "Error";
	}
}