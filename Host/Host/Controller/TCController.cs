using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using Host.Model;
using Host.Services;

namespace Host
{
    public class TCController : ApiController
    {
        
        TC tc = new TC();
       
       
        public TC GetTC()
        {

            tc = DataAccessService.Instance.getTC(1);
            return tc;
        }

       
    }
}