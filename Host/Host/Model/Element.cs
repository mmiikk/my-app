using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Host.Model
{
    public class Element
    {
        public int ID { get; set; }
        public int Station_ID { get; set; }
        public int Position_X { get; set; }
        public int Position_Y { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public bool ShowBorder { get; set; }
        public string Name { get; set; }
        public bool ShowName { get; set; }
        public string Position_Name { get; set; }
        public bool OnTop { get; set; }
        public bool Selected { get; set; }

        //     public ObservableCollection<Value> _Values { get; set; }
        //  public ObservableCollection<Mask> _Masks { get; set; }
        public Font Font { get; set; }
        public Value ValueID { get; set; }
        public Value FontColor { get; set; }
        public Value BackColor { get; set; }
        public Value Action { get; set; }
        public Value Visible { get; set; }
    }
}
