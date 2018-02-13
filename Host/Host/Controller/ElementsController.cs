using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using Host.Model;
using Host.Services;

namespace Host
{
    public class ElementsController : ApiController
    {
        
        Element[] elements = new Element[] { };
       
       
        public IEnumerable<Element> GetAllElements()
        {
            
            elements = DataAccessService.Instance.GetAllElements(17).ToArray();
            return elements;
        }



    }
}