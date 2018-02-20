using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.ObjectModel;
using Host.Model;
using Host;

namespace Host.Helper
{
    public class sqlWorker
    {

        static DataSet loadData(string query)
        {
            DataSet dataSet = new DataSet();
            string connectionString = "";
            try
            {
                connectionString = ConfigurationManager.ConnectionStrings["myConnectionString"].ConnectionString;
                connectionString = connectionString.Replace("IP", Settings1.Default.ServerIP);
                connectionString = connectionString.Replace("DBUser", Settings1.Default.DBUser);
                connectionString = connectionString.Replace("DBPassword", Settings1.Default.DBPassword);
                connectionString = connectionString.Replace("DBName", Settings1.Default.DBName);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            //set connection with connection string from web config
            using (SqlConnection connection = new SqlConnection(connectionString))
            {

                //try execute query
                try
                {
                    //open connection
                    connection.Open();

                    //get data from sql
                    using (SqlDataAdapter dataAdapter = new SqlDataAdapter(query, connection))
                    {

                        //fill data set
                        dataAdapter.Fill(dataSet);

                        return dataSet;
                    }
                    connection.Close();
                }
                catch (Exception ex)
                {
                    throw ex;
                }


            }

        }

       
        public List<Element> loadElements(int StationID)
        {
            List<Element> ElementsSet = new List<Element>();

            try
            {
                DataSet Data = loadData("Select * from " + Settings1.Default.DBName + ".[dbo].[Elements] where Station_ID = " + StationID + " order by ID asc");
                List<Font> Fonts = loadAllFont(StationID);
                List<Value> Values = loadAllValues(StationID);
                foreach (DataRow row in Data.Tables[0].Rows)
                {
                    Element obj = new Element();
                    obj.ID = (int)row["ID"];
                    obj.Station_ID = (byte)row["Station_ID"];
                    obj.Position_X = (int)row["Position_X"];
                    obj.Position_Y = (int)row["Position_Y"];
                    obj.Width = (int)row["Width"];
                    obj.Height = (int)row["Height"];
                    obj.Name = (string)row["Name"];
                    obj.Position_Name = (string)row["Position_Name"];
                    obj.ShowBorder = (bool)row["ShowBorder"];
                    obj.ShowName = (bool)row["ShowName"];
                    obj.OnTop = (bool)row["OnTop"];
                    obj.Font = Fonts.FirstOrDefault(x => x.Station_ID == obj.Station_ID && x.ID == obj.ID);
                    obj.ValueID = Values.FirstOrDefault(x => x.Station_ID == obj.Station_ID && x.ID == obj.ID && x.ID == obj.ID);
                    obj.FontColor = Values.FirstOrDefault(x => x.Station_ID == obj.Station_ID && x.ID == 1000+obj.ID);
                    obj.BackColor = Values.FirstOrDefault(x => x.Station_ID == obj.Station_ID &&  x.ID == 2000 + obj.ID);
                    obj.Action = Values.FirstOrDefault(x => x.Station_ID == obj.Station_ID && x.ID == 4000 + obj.ID);
                    obj.Visible = Values.FirstOrDefault(x => x.Station_ID == obj.Station_ID && x.ID == 5000 + obj.ID);
                    //   obj.Masks = loadMasks(StationID, (int)row["ID"]);

                    ElementsSet.Add(obj);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }


            return ElementsSet;

        }

        public TC loadTC(int StationID)
        {
           
            TC obj = new TC();
            try
            {
                DataSet Data = loadData("Select top 1* from " + Settings1.Default.DBName + ".[dbo].[UpdateStatus] where Station_ID = " + StationID + " order by Station_ID asc");
                
               
                obj.Width = (int)Data.Tables[0].Rows[0]["Width"];
                obj.Height = (int)Data.Tables[0].Rows[0]["Height"];
                  

                
            }
            catch (Exception ex)
            {
                throw ex;
            }


            return obj;

        }


        public List<Font> loadAllFont(int StationID)
        {
            DataSet Data = loadData("Select distinct * from " + Settings1.Default.DBName + ".[dbo].[FontsList] where Station_ID = " + StationID + " order by ID asc");
            
            List<Font> Fonts = new List<Font>();
            foreach (DataRow row in Data.Tables[0].Rows)
            {
                Font font = new Font();
                font.ID = (int)row["ID"];
                font.Station_ID = (int)row["Station_ID"];
                font.Size = (byte)row["Size"];
                font.Bold = (bool)row["Bold"];
                font.Italic = (bool)row["Italic"];
                font.Underline = (bool)row["Underline"];
                font.CenterAlign = (bool)row["CenterAlign"];
                Fonts.Add(font);
            }

            return Fonts;
        }

        public List<Value> loadAllValues(int StationID)
        {
            DataSet Data = loadData("Select distinct * from " + Settings1.Default.DBName + ".[dbo].[Values] where Station_ID = " + StationID + " order by ID asc");
            List<Value> Values = new List<Value>();
            try
            {

                List<Mask> Masks = loadAllMasks(StationID);
            
                
                foreach (DataRow row in Data.Tables[0].Rows)
                {
                    Value value = new Value();
                    value.ID = (int)row["ID"];
                    value.Station_ID = (int)row["Station_ID"];
                    value.Type = (string)row["Type"];
                    value.DB = (int)row["DB"];
                    value.StartByte = (int)row["StartByte"];
                    value.Length = (int)row["Length"];
                    value.Val = (string)row["Value"];
                    value.Mask_ID = (int)row["Mask_ID"];
                    value.DBType = (int)row["DBType"];
                    value.PLC_ID = (int)row["PLC_ID"];
                    value.Mask = Masks.FindAll(x => x.Station_ID == StationID && x.ID == value.Mask_ID);
                    Values.Add(value);
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }

            return Values;
        }

        public List<Mask> loadAllMasks(int StationID)
        {
            DataSet Data = loadData("Select distinct * from " + Settings1.Default.DBName + ".[dbo].[Masks] where Station_ID = " + StationID + " order by ID asc");

            List<Mask> Masks = new List<Mask>();
            try {
                foreach (DataRow row in Data.Tables[0].Rows)
                {
                    Mask mask = new Mask();
                    mask.ID = (int)row["ID"];
                    mask.Station_ID = (byte)row["Station_ID"];
                    mask.Position = (byte)row["Position"];
                    mask.MaskVal = (string)row["Mask"];
                    mask.Value = (string)row["Value"];
                    Masks.Add(mask);
                }
            }
            catch (Exception ex)
            { throw ex; }

            return Masks;
        }
        public Font loadFont(int StationID, int ID)
        {
            DataSet Data = loadData("Select distinct * from " + Settings1.Default.DBName + ".[dbo].[FontsList] where Station_ID = " + StationID + " and ID = " + ID + " order by ID asc");
            Font font = new Font();
            foreach (DataRow row in Data.Tables[0].Rows)
            {
                font.ID = (int)row["ID"];
                font.Station_ID = (int)row["Station_ID"];
                font.Size = (byte)row["Size"];
                font.Bold = (bool)row["Bold"];
                font.Italic = (bool)row["Italic"];
                font.Underline = (bool)row["Underline"];
                font.CenterAlign = (bool)row["CenterAlign"];
            }

            return font;
        }

        public ObservableCollection<PLC> loadPLCs()
        {
            ObservableCollection<PLC> PLCSet = new ObservableCollection<PLC>();
            DataSet Data = loadData("Select distinct * from " + Settings1.Default.DBName + ".[dbo].[PLC] order by ID asc");

            foreach (DataRow row in Data.Tables[0].Rows)
            {
                PLC plc = new PLC();
                plc.ID = (int)row["ID"];
                plc.Name = (string)row["Name"];
                plc.Direct = (bool)row["Direct"];
                PLCSet.Add(plc);
            }

            return PLCSet;
        }
        /*
               public ObservableCollection<Value> loadValuesAsObservableCollection(int StationID, int ID)
               {
                   ObservableCollection<Value> ValuesSet = new ObservableCollection<Value>();
                   string query = String.Format("Select v.*, p.Name from {0}.[dbo].[Values] v, {0}.[dbo].[PLC] p where v.Station_ID = {2} and v.ID in ( {1}, (select {1}+1000), (select {1}+2000), (select {1}+3000), (select {1}+4000), (select {1}+5000) ) and v.PLC_ID = p.ID order by ID asc",
                       Settings1.Default.DBName,
                       ID,
                       StationID

                       );
                   DataSet Data = loadData(query);
                   foreach (DataRow row in Data.Tables[0].Rows)
                   {
                       Value obj = new Value();
                       obj.ID = (int)row["ID"];
                       obj.Type = (string)row["Type"];
                       obj.DB = (int)row["DB"];
                       obj.StartByte = (int)row["StartByte"];
                       obj.Length = (int)row["Length"];
                       obj.Val = (string)row["Value"];
                       obj.Mask_ID = (int)row["Mask_ID"];
                       obj.DBType = (int)row["DBType"];
                       obj.oPLC.ID = (int)row["PLC_ID"];
                       obj.oPLC.Name = (string)row["Name"];

                       ValuesSet.Add(obj);
                   }

                   return ValuesSet;
               }

              

              public ObservableCollection<PLC> loadPLCs()
               {
                   ObservableCollection<PLC> PLCSet = new ObservableCollection<PLC>();
                   DataSet Data = loadData("Select distinct * from " + Settings1.Default.DBName + ".[dbo].[PLC] order by ID asc");

                   foreach (DataRow row in Data.Tables[0].Rows)
                   {
                       PLC plc = new PLC();
                       plc.ID = (int)row["ID"];
                       plc.Name = (string)row["Name"];
                       PLCSet.Add(plc);
                   }

                   return PLCSet;
               }

               public ObservableCollection<Mask> loadMasks(int StationID, int MaskID)
               {
                   ObservableCollection<Mask> MaskSet = new ObservableCollection<Mask>();
                   DataSet Data = loadData(String.Format("Select * from " + Settings1.Default.DBName + ".[dbo].[Masks] where ID = {0} and Station_ID = {1} order by ID asc", MaskID, StationID));

                   foreach (DataRow row in Data.Tables[0].Rows)
                   {
                       Model.Mask mask = new Mask();
                       mask.ID = (int)row["ID"];
                       mask.Station_ID = (byte)row["Station_ID"];
                       mask.Position = (byte)row["Position"];
                       mask.Value = row["Value"].ToString();
                       mask.MaskVal = row["Mask"].ToString();
                       MaskSet.Add(mask);
                   }

                   return MaskSet;
               }

               public ObservableCollection<int> loadTCs()
               {
                   ObservableCollection<int> TCSet = new ObservableCollection<int>();
                   DataSet Data = loadData(String.Format("Select distinct Station_ID from [" + Settings1.Default.DBName + "].[dbo].[Elements] order by Station_ID asc"));

                   foreach (DataRow row in Data.Tables[0].Rows)
                   {
                       TCSet.Add(Convert.ToInt32(row["Station_ID"]));
                   }

                   return TCSet;
               }

               public int getMaxElementID(int StationID)
               {
                   int ID = 0;
                   DataSet Data = loadData(String.Format("Select max(ID) from [" + Settings1.Default.DBName + "].[dbo].[Elements] where Station_ID = {0}", StationID));

                   ID = (Convert.ToInt32(Data.Tables[0].Rows[0][0]));


                   return ID;
               }

               public TCSetup loadTCSetup(int StationID)
               {
                   TCSetup TCSetup = new TCSetup();
                   DataSet Data = loadData(String.Format("Select top 1 Width, Height from [" + Settings1.Default.DBName + "].[dbo].[UpdateStatus] where Station_ID={0} order by Station_ID asc", StationID));

                   foreach (DataRow row in Data.Tables[0].Rows)
                   {
                       TCSetup.Width = Convert.ToInt32(row["Width"]);
                       TCSetup.Height = Convert.ToInt32(row["Height"]);
                   }

                   return TCSetup;
               }

               public bool addNewElement(int StationID)
               {

                   Element newElement = new Element();

                   newElement.Station_ID = StationID;
                   newElement.ElementFont.Station_ID = StationID;

                   newElement.ID = getMaxElementID(StationID) + 1;

                   ObservableCollection<Value> Values = new ObservableCollection<Value>();
                   Value Val1 = new Value();
                   Val1.ID = newElement.ID;
                   Val1.DBType = 3;
                   Val1.Val = "";
                   Value Val2 = new Value();
                   Val2.ID = newElement.ID + 1000;
                   Value Val3 = new Value();
                   Val3.ID = newElement.ID + 2000;
                   Value Val4 = new Value();
                   Val4.ID = newElement.ID + 3000;
                   Value Val5 = new Value();
                   Val5.ID = newElement.ID + 4000;
                   Val5.Type = "";
                   Value Val6 = new Value();
                   Val6.ID = newElement.ID + 5000;
                   Val6.Val = "1";

                   Values.Add(Val1);
                   Values.Add(Val2);
                   Values.Add(Val3);
                   Values.Add(Val4);
                   Values.Add(Val5);
                   Values.Add(Val6);

                   newElement.Values = Values;

                   string query1 = "INSERT INTO [Bor_ThinClient].[dbo].[Elements] ([ID] ,[Station_ID] ,[Position_X] ,[Position_Y] ,[Width] ,[Height] ,[ShowBorder] ,[Name] ,[ShowName] ,[Position_Name] ,[BackColor_Value_ID] ,[FontColor_Value_ID] ,[Value_ID] ,[Refresh_ID] ,[Font_ID] ,[Picture] ,[Action_Value_ID] ,[Visible_Value_ID] ,[OnTop]) values ";
                   query1 += " ({0},{1},{2},{3},{4},{5},'{6}','{7}','{8}','{9}',{10},{11},{12},{13},{14},{15},{16},{17},{18})";

                   query1 = String.Format(query1,
                       newElement.ID,
                       StationID,
                       newElement.Position_X,
                       newElement.Position_Y,
                       newElement.Width,
                       newElement.Height,
                       newElement.ShowBorder,
                       newElement.Name,
                       newElement.ShowName,
                       newElement.Position_Name,
                       Val3.ID,
                       Val2.ID,
                       Val1.ID,
                       1,
                       Val1.ID,
                       0,
                       Val5.ID,
                       Val6.ID,
                       0);

                   string query2 = "INSERT INTO [Bor_ThinClient].[dbo].[FontsList] ([ID] ,[Station_ID] ,[Size] ,[Bold] ,[Italic] ,[Underline] ,[CenterAlign] ) values ";
                   query2 += " ({0},{1},{2},'{3}','{4}','{5}','{6}')";
                   query2 = String.Format(query2,
                       newElement.ID,
                       StationID,
                       newElement.ElementFont.Size,
                       newElement.ElementFont.Bold,
                       newElement.ElementFont.Italic,
                       newElement.ElementFont.Underline,
                       newElement.ElementFont.CenterAlign
                   );


                   string query3 = "INSERT INTO [Bor_ThinClient].[dbo].[Values] ([ID] ,[Station_ID] ,[Type] ,[DB] ,[StartByte] ,[Length] ,[Value] ,[Mask_ID] ,[DBType] ,[PLC_ID] ) values ";
                   query3 += " ({0},{1},'{2}',{3},{4},{5},'{6}',{7},{8},{9}) ";

                   string query4 = "";
                   foreach (Value Val in Values)
                   {
                       query4 += String.Format(query3,
                           newElement.ID,
                           StationID,
                           Val.Type,
                           Val.DB,
                           Val.StartByte,
                           Val.Length,
                           Val.Val,
                           Val.Mask_ID,
                           Val.DBType,
                           Val.oPLC.ID
                       );

                   }

                   DataSet ds = loadData(query1);
                   ds = loadData(query2);
                   ds = loadData(query4);


                   return true;
               }
               */
    }
}
