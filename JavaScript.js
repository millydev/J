

function CalRandom(value)
{
    var result= "";
    try
    {
       
       result= math.eval(value);
    }
    catch(e)
    {
        result= "error";
    }
    return result;
}