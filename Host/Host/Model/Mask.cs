using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Host.Model
{
    public class Mask
    {
        public int ID { get; set; }
        public int Station_ID { get; set; }
        public int Position { get; set; }
        public string Value { get; set; }
        public string MaskVal { get; set; }
    }
}
