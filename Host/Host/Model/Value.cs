using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Host.Model
{
    public class Value
    {
        public int ID { get; set; }
        public int Station_ID { get; set; }
        public string Type = String.Empty;
        public int DB { get; set; }
        public int StartByte { get; set; }
        public int Length { get; set; }
        public string Val = String.Empty;
        public int Mask_ID = 0;
        public int DBType { get; set; }
        public int PLC_ID { get; set; }
        public List<Mask> Mask = new List<Mask>();
    }
}
