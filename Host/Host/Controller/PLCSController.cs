using Host.Model;
using Host.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace Host.Controller
{
    public class PLCSController : ApiController
    {
        
        PLC[] plcs = new PLC[] { };

       

        public IEnumerable<PLC> GetAllPLCs()
        {

            plcs = DataAccessService.Instance.GetAllPLCs().ToArray();
            return plcs;
        }


    }
}
