using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/values")]
    [Produces("application/json")]
    public class ValuesController : Controller
    { 
        // POST api/values
        [HttpPost]
        [Route("Post")]
        public void Post([FromBody]Pessoa pessoa)
        {
            var a = 0;
        }
    }
}
