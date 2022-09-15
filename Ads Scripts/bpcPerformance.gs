// Modify CLIENT_NAME and PLATFORM_NAME to run for other clients or AdWords subplatforms
var CLIENT_NAME = 'PepsiCo'; // Will reference client in the final report
//var ACCOUNT_NAME = ''; // Will be used to find the relevant accounts in the MCC.
var ACCOUNT_ID = ["'811-457-3354'"]
var PLATFORM_NAME = 'AdWords'; // Will reference platform in the final report
var results = [];
var ACCOUNT_THRESHOLD = 1; // Will remove accounts under a certain impressions threshold in the past 30 days. Put to 0 to select all accounts
var CAMPAIGN_THRESHOLD = 0; // Will remove campaigns under a certain impressions threshold in the past 30 days. Put to 0 to select all campaigns
var MAX_INSERT_SIZE = 10 * 1024 * 1024 - 512 * 1024; // Impose a limit on the size of BQ inserts: 10MB - 512Kb for overheads.

// Configuration for the Data Upload and Report Generation
var CONFIG = {
  BIGQUERY_PROJECT_ID: 'blinks-bi',
  BIGQUERY_DATASET_ID: CLIENT_NAME,
  
  // Truncate existing data, otherwise will append.
  TRUNCATE_EXISTING_DATASET: false,
  TRUNCATE_EXISTING_TABLES: true,
  
  DEFAULT_DATE_RANGE: 'LAST_30_DAYS',
  
  REPORTS: [{NAME: 'AdPerformance',
             TYPE: 'AD_PERFORMANCE_REPORT',
             CONDITIONS: 'WHERE Impressions > '+ CAMPAIGN_THRESHOLD.toString(), //CONFIG FOR IMPRESSIONS
             FIELDS: {
             'AccountDescriptiveName' : 'STRING',
             'CampaignId' : 'STRING',
             'CampaignName' : 'STRING',
             'CampaignStatus' : 'STRING',
             'AdGroupId' : 'STRING',
             'AdGroupName' : 'STRING',
             'AdGroupStatus' : 'STRING',
             'Id' : 'STRING',
             'AdType' : 'STRING',
             'Status' : 'STRING',
             'DisplayUrl' : 'STRING',
             'CreativeFinalUrls' : 'STRING',
             'Description' : 'STRING',
             'HeadlinePart1' : 'STRING',
             'HeadlinePart2' : 'STRING',
             'ImageCreativeName' : 'STRING',
             'ImageCreativeImageHeight' : 'STRING',
             'ImageCreativeImageWidth' : 'STRING',
             'Cost' : 'FLOAT',
             'Impressions' : 'INTEGER',
             'Clicks' : 'INTEGER',
             'Conversions' : 'FLOAT',
             'VideoViews' : 'INTEGER',
             'VideoQuartile100Rate' : 'FLOAT',
             'VideoQuartile25Rate' : 'FLOAT',
             'VideoQuartile50Rate' : 'FLOAT',
             'VideoQuartile75Rate' : 'FLOAT'
            }
            },
            
    
            {NAME: 'KeywordPerformance',
            TYPE: 'KEYWORDS_PERFORMANCE_REPORT',
            CONDITIONS: 'WHERE Impressions > '+ CAMPAIGN_THRESHOLD.toString(), //CONFIG FOR IMPRESSIONS
            FIELDS: {
            'AccountDescriptiveName' : 'STRING',
            'CampaignId' : 'STRING',
            'CampaignName' : 'STRING',
            'CampaignStatus' : 'STRING',
            'AdGroupId' : 'STRING',
            'AdGroupName' : 'STRING',
            'AdGroupStatus' : 'STRING',
            'Id' : 'STRING',
            'Criteria' : 'STRING',
            'Status' : 'STRING',
            'ApprovalStatus' : 'STRING',
            'KeywordMatchType' : 'STRING',
            'CriteriaDestinationUrl' : 'STRING',
            'FinalUrls' : 'STRING',
            'FirstPageCpc' : 'FLOAT',
            'TopOfPageCpc' : 'FLOAT',
            'FirstPositionCpc' : 'FLOAT',
            'CpcBid' : 'FLOAT',
            'CpcBidSource' : 'STRING',
            'EnhancedCpcEnabled' : 'STRING',
            'QualityScore' : 'FLOAT',
            'Cost' : 'FLOAT',
            'Impressions' : 'INTEGER',
            'Clicks' : 'INTEGER',
            'Conversions' : 'FLOAT',
            'AveragePosition' : 'FLOAT',
            'SearchImpressionShare' : 'STRING',
            'SearchRankLostImpressionShare' : 'STRING',
            'SearchExactMatchImpressionShare' : 'STRING',
            }
            },
            
            {NAME: 'AdGroupPerformance',
            TYPE: 'ADGROUP_PERFORMANCE_REPORT',
            CONDITIONS: 'WHERE Impressions > '+ CAMPAIGN_THRESHOLD.toString(), //CONFIG FOR IMPRESSIONS
            FIELDS: {
            'AccountDescriptiveName' : 'STRING', 
            'CampaignId' : 'STRING',
            'CampaignName' : 'STRING',
            'CampaignStatus' : 'STRING',
            'AdGroupId' : 'STRING',
            'AdGroupName' : 'STRING',
            'AdGroupStatus' : 'STRING',
            'AdNetworkType1' : 'STRING',
            'AdNetworkType2' : 'STRING',
            'BiddingStrategyName' : 'STRING',
            'BiddingStrategyType' : 'STRING',
            'BiddingStrategySource' : 'STRING',
            //'BidType' : 'STRING',
            'CpcBid' : 'FLOAT',
            'CpmBid' : 'FLOAT',
            'CpvBid' : 'FLOAT',
            'EnhancedCpcEnabled' : 'STRING',
           // 'EnhancedCpvEnabled' : 'STRING',
            'TargetCpa' : 'FLOAT',
            'TargetCpaBidSource' : 'STRING',
            'AdGroupDesktopBidModifier' : 'STRING',
            'AdGroupMobileBidModifier' : 'STRING',
            'AdGroupTabletBidModifier' : 'STRING',
            'Cost' : 'FLOAT',
            'Impressions' : 'INTEGER',
            'Clicks' : 'INTEGER',
            'Conversions' : 'FLOAT',
            'VideoViews' : 'INTEGER',
            'VideoQuartile100Rate' : 'FLOAT',
            'VideoQuartile25Rate' : 'FLOAT',
            'VideoQuartile50Rate' : 'FLOAT',
            'VideoQuartile75Rate' : 'FLOAT',
            'AveragePosition' : 'FLOAT',
            'SearchImpressionShare' : 'STRING',
            'SearchRankLostImpressionShare' : 'STRING',
            'SearchExactMatchImpressionShare' : 'STRING',
            'ContentImpressionShare' : 'STRING',
            'ContentRankLostImpressionShare' : 'STRING'
            }
            },
            {NAME: 'CampaignPerformance',
            TYPE: 'CAMPAIGN_PERFORMANCE_REPORT',
            CONDITIONS: 'WHERE Impressions >= '+ CAMPAIGN_THRESHOLD.toString(), //CONFIG FOR IMPRESSIONS
            FIELDS: {
            'AccountDescriptiveName' : 'STRING',
            'CampaignId' : 'STRING',
            'CampaignName' : 'STRING',
            'CampaignStatus' : 'STRING',
            'ServingStatus' : 'STRING',
            'AdvertisingChannelType' : 'STRING',
            'AdvertisingChannelSubType' : 'STRING',
            'AdNetworkType1' : 'STRING',
            'AdNetworkType2' : 'STRING',
            'BiddingStrategyName' : 'STRING',
            'BiddingStrategyType' : 'STRING',
            //'BidType' : 'STRING',
            'CampaignDesktopBidModifier' : 'STRING',
            'CampaignMobileBidModifier' : 'STRING',
            'CampaignTabletBidModifier' : 'STRING',
            'Cost' : 'FLOAT',
            'Impressions' : 'INTEGER',
            'Clicks' : 'INTEGER',
            'Conversions' : 'FLOAT',
            'VideoViews' : 'INTEGER',
            'VideoQuartile100Rate' : 'FLOAT',
            'VideoQuartile25Rate' : 'FLOAT',
            'VideoQuartile50Rate' : 'FLOAT',
            'VideoQuartile75Rate' : 'FLOAT',
            'AveragePosition' : 'FLOAT',
            'SearchImpressionShare' : 'STRING',
            'SearchRankLostImpressionShare' : 'STRING',
            'SearchBudgetLostImpressionShare' : 'STRING',
            'ContentImpressionShare' : 'STRING',
            'ContentRankLostImpressionShare' : 'STRING',
            'ContentBudgetLostImpressionShare' : 'STRING',
            'AverageFrequency' : 'FLOAT'
            }
            },
            
            {NAME: 'NegativeKeywords',
            TYPE: 'CAMPAIGN_NEGATIVE_KEYWORDS_PERFORMANCE_REPORT',
            CONDITIONS: 'WHERE Impressions >= '+ CAMPAIGN_THRESHOLD.toString(), //CONFIG FOR IMPRESSIONS
            FIELDS: {
            'AccountDescriptiveName' : 'STRING',
            'CampaignId' : 'STRING',
            'CampaignName' : 'STRING',
            'CampaignStatus' : 'STRING',
            'Id' : 'STRING',
            'Criteria' : 'STRING',
            'KeywordMatchType' : 'STRING',
            'IsNegative' : 'STRING',
            }
            },
            
            {NAME: 'AudiencePerfomance',
            TYPE: 'AUDIENCE_PERFORMANCE_REPORT',
            CONDITIONS: 'WHERE Impressions >= '+ CAMPAIGN_THRESHOLD.toString(), //CONFIG FOR IMPRESSIONS
            FIELDS: {
            'AccountDescriptiveName' : 'STRING',
            'CampaignId' : 'STRING',
            'CampaignName' : 'STRING',
            'CampaignStatus' : 'STRING',
            'Id' : 'STRING',
            'UserListName' : 'STRING'
            }
            },
            
            {NAME: 'GeoPerformance',
            TYPE: 'GEO_PERFORMANCE_REPORT',
            CONDITIONS: 'WHERE Impressions > '+ CAMPAIGN_THRESHOLD.toString(), //CONFIG FOR IMPRESSIONS
            FIELDS: {
            'AccountDescriptiveName' : 'STRING',
            'CampaignId' : 'STRING',
            'CampaignName' : 'STRING',
            'CampaignStatus' : 'STRING',
            'LocationType' : 'STRING',
            'CountryCriteriaId' : 'STRING',
            'IsTargetingLocation' : 'STRING',
            'Impressions' : 'INTEGER'
            }
            }],
};


function main() {

  createDataset();
  for (var i = 0; i < CONFIG.REPORTS.length; i++) {
    var reportConfig = CONFIG.REPORTS[i];
    createTable(reportConfig);   //CLIENT_NAME is global variable
  }

  var accountIterator = MccApp.accounts() //the ids and conditions have an AND relationship - so you can filter the ids from the sheet
  .forDateRange("LAST_7_DAYS")
  .withCondition("Impressions >= "+ACCOUNT_THRESHOLD) //CONFIG FOR ACCOUNTS
  //.withCondition("Name CONTAINS_IGNORE_CASE '"+ACCOUNT_NAME+"'")
  .withCondition("ManagerCustomerId IN ["+ ACCOUNT_ID.toString() + "]")
  .executeInParallel('createData');
}
  

function createData() {
  
  var account = AdWordsApp.currentAccount();     // Get the current account.     
  var accountId = account.getCustomerId();
  var accountName = account.getName();
  Logger.log("Starting data pull for "+accountName);
  var accountJobIds = processReports(accountId, accountName);
  Logger.log("Data uploaded to BQ for "+accountName);

}


// This function pulls all of the specified reports and loads them in BigQuery
function processReports(accountId, accountName) {

  // Iterate over each report type.
  for (var i = 0; i < CONFIG.REPORTS.length; i++) {
    var reportConfig = CONFIG.REPORTS[i];
    Logger.log('Running report %s for account %s', reportConfig.NAME,
        accountName);
    // Get data as an array of CSV chunks.
    var csvData = retrieveAdwordsReport(reportConfig, accountId, accountName);

    for (var j = 0; j < csvData.length; j++) {
      // Convert to Blob format.
      var blobData = Utilities.newBlob(csvData[j], 'application/octet-stream');
      // Load data
      loadDataToBigquery(reportConfig, blobData, !j ? 1 : 0);
    }
  }
}



//  Retrieves AdWords data as csv and formats any fields to BigQuery expected format.
function retrieveAdwordsReport(reportConfig, accountId, accountName) {
  var fieldNames = Object.keys(reportConfig.FIELDS);
  if (reportConfig.TYPE == "CAMPAIGN_CRITERIA_REPORT" || reportConfig.TYPE == "CAMPAIGN_NEGATIVE_KEYWORDS_PERFORMANCE_REPORT") {
    var query = 'SELECT ' + fieldNames.join(',') +
    ' FROM ' + reportConfig.TYPE
  } else {    
    var query = 'SELECT ' + fieldNames.join(',') +
    ' FROM ' + reportConfig.TYPE + ' ' + reportConfig.CONDITIONS +
    ' DURING ' + CONFIG.DEFAULT_DATE_RANGE }
  var report = AdWordsApp.report(query, {
        apiVersion: 'v201809'
      });
  var rows = report.rows();
  var chunks = [];
  var chunkLen = 0;
  var csvRows = [];
  var totalRows = 0;
  // Header row
  var header = 'AccountId,' + fieldNames.join(',');
  csvRows.push(header);
  chunkLen += Utilities.newBlob(header).getBytes().length + 1;

  // Iterate over each row.
  while (rows.hasNext()) {
    var row = rows.next();

    if (chunkLen > MAX_INSERT_SIZE) {
      chunks.push(csvRows.join('\n'));
      totalRows += csvRows.length;
      chunkLen = 0;
      csvRows = [];
    }
    var csvRow = [];
    csvRow.push(accountId);
   // csvRow.push(accountName);

    for (var i = 0; i < fieldNames.length; i++) {
      var fieldName = fieldNames[i];
      var fieldValue = row[fieldName].toString();
      var fieldType = reportConfig.FIELDS[fieldName];
      // Strip off % and perform any other formatting here.
      if (fieldType == 'FLOAT' || fieldType == 'INTEGER') {
        if (fieldValue.charAt(fieldValue.length - 1) == '%') {
          fieldValue = fieldValue.substring(0, fieldValue.length - 1);
        }
        fieldValue = fieldValue.replace(/,/g,'');
      }
      // Add double quotes to any string values.
      if (fieldType == 'STRING') {
        fieldValue = fieldValue.replace(/"/g, '""');
        fieldValue = '"' + fieldValue + '"';
      }
      csvRow.push(fieldValue);
    }
    var rowString = csvRow.join(',');
    csvRows.push(rowString);
    chunkLen += Utilities.newBlob(rowString).getBytes().length + 1;
  }
  if (csvRows) {
    totalRows += csvRows.length;
    chunks.push(csvRows.join('\n'));
  }
  Logger.log('Downloaded ' + reportConfig.NAME + ' for account ' + accountName +
      ' with ' + totalRows + ' rows, in ' + chunks.length + ' chunks.');
  return chunks;
}


// This function is used in the processReports function to execute the data load into BigQuery
function loadDataToBigquery(reportConfig, data, skipLeadingRows) {
  var name = CLIENT_NAME + "_" + PLATFORM_NAME + "_" + reportConfig.NAME;
  var pauseTime = Math.floor((Math.random() * 6) + 1)*5000;
  Logger.log("Script will be paused for " + pauseTime/1000 + " seconds to avoid API saturation");
  Utilities.sleep(pauseTime)
  // Create the data upload job.
  var job = {
    configuration: {
      load: {
        destinationTable: {
          projectId: CONFIG.BIGQUERY_PROJECT_ID,
          datasetId: CONFIG.BIGQUERY_DATASET_ID,
          tableId: name
        },
        skipLeadingRows: skipLeadingRows ? skipLeadingRows : 0,
        nullMarker: '--'
      }
    }
  };

  BigQuery.Jobs.insert(job, CONFIG.BIGQUERY_PROJECT_ID, data);
}


// this function creates a new dataset. If a dataset with the same id already exists and the truncate flag is set, it will truncate the old dataset. If the truncate flag is not set, then will not create a new dataset.
function createDataset() {
   if (datasetExists()) {
    if (CONFIG.TRUNCATE_EXISTING_DATASET) {
      BigQuery.Datasets.remove(CONFIG.BIGQUERY_PROJECT_ID,
        CONFIG.BIGQUERY_DATASET_ID, {'deleteContents' : true});
      Logger.log('Truncated dataset.');
    } else {
      Logger.log('Dataset %s already exists.  Will not recreate.',
       CONFIG.BIGQUERY_DATASET_ID);
      return;
    }
  }

  // Create new dataset.
  var dataSet = BigQuery.newDataset();
  dataSet.friendlyName = CONFIG.BIGQUERY_DATASET_ID;
  dataSet.datasetReference = BigQuery.newDatasetReference();
  dataSet.datasetReference.projectId = CONFIG.BIGQUERY_PROJECT_ID;
  dataSet.datasetReference.datasetId = CONFIG.BIGQUERY_DATASET_ID;

  dataSet = BigQuery.Datasets.insert(dataSet, CONFIG.BIGQUERY_PROJECT_ID);
  Logger.log('Created dataset with id %s.', dataSet.id);
}

// This function is used in the above function to check if the dataset already exist or not
function datasetExists() {
  // Get a list of all datasets in project.
  var datasets = BigQuery.Datasets.list(CONFIG.BIGQUERY_PROJECT_ID);
  var datasetExists = false;
  // Iterate through each dataset and check for an id match.
  if (datasets.datasets != null) {
    for (var i = 0; i < datasets.datasets.length; i++) {
      var dataset = datasets.datasets[i];
      if (dataset.datasetReference.datasetId == CONFIG.BIGQUERY_DATASET_ID) {
        datasetExists = true;
        break;
      }
    }
  }
  return datasetExists;
}

// this function creates a new table. If a table with the same id already exists and the truncate flag is set, it will truncate the old table. If the truncate flag is not set, then will not create a new table.
function createTable(reportConfig,SHEET_NAME) {
  var name = CLIENT_NAME + "_" + PLATFORM_NAME + "_" + reportConfig.NAME;
  if (tableExists(name)) {
    if (CONFIG.TRUNCATE_EXISTING_TABLES) {
      BigQuery.Tables.remove(CONFIG.BIGQUERY_PROJECT_ID,
          CONFIG.BIGQUERY_DATASET_ID, name);
      Logger.log('Truncated dataset %s.', name);
    } else {
      Logger.log('Table %s already exists.  Will not recreate.',
          name);
      return;
    }
  }

  // Create new table.
  var table = BigQuery.newTable();
  var schema = BigQuery.newTableSchema();
  var bigQueryFields = [];

  // Add account column to table.
  var accountFieldSchema = BigQuery.newTableFieldSchema();
  accountFieldSchema.description = 'AccountId';
  accountFieldSchema.name = 'AccountId';
  accountFieldSchema.type = 'STRING';
  bigQueryFields.push(accountFieldSchema);
  
//  accountFieldSchema.description = 'AccountName';
//  accountFieldSchema.name = 'AccountName';
//  accountFieldSchema.type = 'STRING';
//  bigQueryFields.push(accountFieldSchema);

  // Add each field to table schema.
  var fieldNames = Object.keys(reportConfig.FIELDS);
  for (var i = 0; i < fieldNames.length; i++) {
    var fieldName = fieldNames[i];
    var bigQueryFieldSchema = BigQuery.newTableFieldSchema();
    bigQueryFieldSchema.description = fieldName;
    bigQueryFieldSchema.name = fieldName;
    bigQueryFieldSchema.type = reportConfig.FIELDS[fieldName];

    bigQueryFields.push(bigQueryFieldSchema);
  }

  schema.fields = bigQueryFields;
  table.schema = schema;
  table.friendlyName = name;

  table.tableReference = BigQuery.newTableReference();
  table.tableReference.datasetId = CONFIG.BIGQUERY_DATASET_ID;
  table.tableReference.projectId = CONFIG.BIGQUERY_PROJECT_ID;
  table.tableReference.tableId = name;

  try {
    table = BigQuery.Tables.insert(table, CONFIG.BIGQUERY_PROJECT_ID,
      CONFIG.BIGQUERY_DATASET_ID);
  } catch(e) {
    Logger.log('Truncated dataset %s.', name);
    BigQuery.Tables.remove(CONFIG.BIGQUERY_PROJECT_ID,
                           CONFIG.BIGQUERY_DATASET_ID, name)
    table = BigQuery.Tables.insert(table, CONFIG.BIGQUERY_PROJECT_ID,
      CONFIG.BIGQUERY_DATASET_ID);
  }

  Logger.log('Created table with id %s.', table.id);
}

// This function is used in the above function to check if the table already exist or not
function tableExists(tableId) {
  // Get a list of all tables in the dataset.
  var tables = BigQuery.Tables.list(CONFIG.BIGQUERY_PROJECT_ID,
      CONFIG.BIGQUERY_DATASET_ID);
  var tableExists = false;
  // Iterate through each table and check for an id match.
  if (tables.tables != null) {
    for (var i = 0; i < tables.tables.length; i++) {
      var table = tables.tables[i];
      if (table.tableReference.tableId == tableId) {
        tableExists = true;
        break;
      }
    }
  }
  return tableExists;
}
