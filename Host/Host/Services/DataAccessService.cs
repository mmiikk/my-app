using System;
using System.Collections.ObjectModel;
using Host.Model;
using Host.Helper;
using System.Collections.Generic;

namespace Host.Services
{
  
    public class DataAccessService
    {
        sqlWorker sql;
        Element context;

        private static DataAccessService instance;

        private DataAccessService()
        {
            context = new Element();
            sql = new sqlWorker();
        }

        public static DataAccessService Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new DataAccessService();
                }
                return instance;
            }
        }

        public List<Element> GetAllElements(int StationID)
        {
            List<Element> Elements = new List<Element>();
            try
            {
                Elements = sql.loadElements(StationID);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Elements;
        }


        public TC getTC(int StationID)
        {
            TC TC = new TC();
            try
            {
                TC = sql.loadTC(StationID);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return TC;
        }

        public bool SetConnectionString(string IP, string user, string password, string DBName)
        {
            Settings1.Default.ServerIP = IP;
            Settings1.Default.DBUser = user;
            Settings1.Default.DBPassword = password;
            Settings1.Default.DBName = DBName;
            Settings1.Default.Save();

            return true;
        }

        public bool AddElement(int StationID)
        {
            throw new NotImplementedException();
        }
        public ObservableCollection<PLC> GetAllPLCs()
        {
            ObservableCollection<PLC> plcs = new ObservableCollection<PLC>();
            try
            {
                plcs = sql.loadPLCs();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return plcs;
        }

        /*  public ObservableCollection<Value> GetAllValues(int StationID, int ElementID)
          {
              ObservableCollection<Value> Values = new ObservableCollection<Value>();
              try
              {
                  Values = sql.loadValuesAsObservableCollection(StationID, ElementID);
                  Value val = new Value();
                  val.ID = ElementID;
                  val.Type = "Static";
                  val.DB = 0;
                  val.StartByte = 0;
                  val.Length = 0;
                  val.Val = "";
                  val.Mask_ID = 0;
                  val.DBType = 2;
                  val.oPLC.ID = 1;
                  if (!Values.Any(p => p.ID == ElementID))
                      Values.Add(val);

                  val.ID = ElementID + 1000;
                  val.Val = "0";
                  if ((!Values.Any(p => p.ID == (ElementID + 1000))) || (!Values.Any(p => p.ID == (ElementID + 3000))))
                      Values.Add(val);

                  val.ID = ElementID + 2000;
                  val.Val = "65280";
                  if (!Values.Any(p => p.ID == (ElementID + 2000)))
                      Values.Add(val);

                  val.ID = ElementID + 4000;
                  val.Val = "0";
                  val.Type = "";
                  if (!Values.Any(p => p.ID == (ElementID + 4000)))
                      Values.Add(val);

                  val.ID = ElementID + 5000;
                  val.Val = "1";
                  val.Type = "Static";
                  if (!Values.Any(p => p.ID == (ElementID + 5000)))
                      Values.Add(val);

                  Values.OrderBy(p => p.ID);
              }
              catch (Exception ex)
              {
                  throw ex;
              }
              return Values;
          }

          public Font GetFont(int StationID, int ElementID)
          {
              Font font = new Font();
              try
              {
                  font = sql.loadFont(StationID, ElementID);
              }
              catch (Exception ex)
              {
                  throw ex;
              }
              return font;
          }

          public ObservableCollection<PLC> GetAllPLCs()
          {
              ObservableCollection<PLC> plcs = new ObservableCollection<PLC>();
              try
              {
                  plcs = sql.loadPLCs();
              }
              catch (Exception ex)
              {
                  throw ex;
              }
              return plcs;
          }

          public ObservableCollection<int> GetAllTCs()
          {
              ObservableCollection<int> tcs = new ObservableCollection<int>();
              try
              {
                  tcs = sql.loadTCs();
              }
              catch (Exception ex)
              {
                  throw ex;
              }
              return tcs;
          }

          public TCSetup GetTCSetup(int StationID)
          {
              TCSetup tcs = new TCSetup();
              try
              {
                  tcs = sql.loadTCSetup(StationID);
              }
              catch (Exception ex)
              {
                  throw ex;
              }
              return tcs;
          }


          public ObservableCollection<Mask> GetMasks(int StationID, int MaskID)
          {
              ObservableCollection<Mask> masks = new ObservableCollection<Mask>();
              try
              {
                  masks = sql.loadMasks(StationID, MaskID);
              }
              catch (Exception ex)
              {
                  throw ex;
              }
              return masks;
          }
          public bool AddElement(int StationID)
          {

              try
              {
                  sql.addNewElement(StationID);
              }
              catch (Exception ex)
              {
                  throw ex;
              }
              return true;
          }
      }
      */
    }
}
