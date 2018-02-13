using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Host.Model
{
    public class Font
    {
        public int ID { get; set; }
        public int Station_ID { get; set; }
        public int Size { get; set; }
        public bool Bold { get; set; }
        public bool Italic { get; set; }
        public bool Underline { get; set; }
        public bool CenterAlign { get; set; }

    }
}
