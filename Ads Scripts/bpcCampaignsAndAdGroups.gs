// Modify CLIENT_NAME and PLATFORM_NAME to run for other clients or AdWords subplatforms
var CLIENT_NAME = 'PepsiCo'; // Will reference client in the final report
//var ACCOUNT_NAME = ''; // Will be used to find the relevant accounts in the MCC
var ACCOUNT_ID = ["'811-457-3354'"]
var PLATFORM_NAME = 'AdWords'; // Will reference platform in the final report.
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
  
  REPORTS: [{NAME: 'Campaigns',
             TYPE: 'Campaigns',
             FIELDS: {
             'AccountName' : 'STRING', 
             'CampaignId' : 'STRING',            
             'CampaignName' : 'STRING',
             'CampaignStatus' : 'STRING',
             'TargetedCountry' : 'STRING',
             'TargetedLanguage' : 'STRING',
             'AdRotationType' : 'STRING',
             'DeviceTargeting' : 'STRING',
             'BiddingStrategyType' : 'STRING',
             'BudgetAmount' : 'FLOAT',
             'BudgetDeliveryMethod' : 'STRING',
             'StartDate' : 'STRING',
             'EndDate' : 'STRING',
             'BudgetOrderEndDate' : 'STRING',
             'ExcludedContentLabels' : 'STRING',
             'ExcludedTopics' : 'STRING',
             'ExcludedKeywordsLists' : 'STRING',
             'ExcludedPlacementsLists' : 'STRING',
             'ExcludedYouTubeChannels' : 'STRING',
             'ExcludedYouTubeVideos' : 'STRING',
             'FrequencyCap' : 'STRING',
             'Last30DaysImpressions' : 'INTEGER',
             'Last30DaysClicks' : 'INTEGER',
             'Last30DaysCost' : 'FLOAT',
             'Last30DaysConversions' : 'FLOAT',
             'Last7DaysImpressions' : 'INTEGER',
             'Last7DaysClicks' : 'INTEGER',
             'Last7DaysCost' : 'FLOAT',
             'Last7DaysConversions' : 'FLOAT'             
            },
            csvData: '',
            accountId: '',
            accountName: '',
            DATA_FUNCTION : function() {
            return getCampaignData(this.csvData, this.accountId, this.accountName);
            }
            },
            
            {NAME: 'Campaigns',
            TYPE: 'VideoCampaigns',
            FIELDS: {
            'AccountName' : 'STRING', 
            'CampaignId' : 'STRING',            
            'CampaignName' : 'STRING',
            'CampaignStatus' : 'STRING',
            'TargetedCountry' : 'STRING',
            'TargetedLanguage' : 'STRING',
            'AdRotationType' : 'STRING',
            'DeviceTargeting' : 'STRING',
            'BiddingStrategyType' : 'STRING',
            'BudgetAmount' : 'FLOAT',
            'BudgetDeliveryMethod' : 'STRING',
            'StartDate' : 'STRING',
            'EndDate' : 'STRING',
            'BudgetOrderEndDate' : 'STRING',
            'ExcludedContentLabels' : 'STRING',
            'ExcludedTopics' : 'STRING',
            'ExcludedKeywordsLists' : 'STRING',
            'ExcludedPlacementsLists' : 'STRING',
            'ExcludedYouTubeChannels' : 'STRING',
            'ExcludedYouTubeVideos' : 'STRING',
            'FrequencyCap' : 'STRING',
            'Last30DaysImpressions' : 'INTEGER',
            'Last30DaysClicks' : 'INTEGER',
            'Last30DaysCost' : 'FLOAT',
            'Last30DaysConversions' : 'FLOAT',
            'Last7DaysImpressions' : 'INTEGER',
            'Last7DaysClicks' : 'INTEGER',
            'Last7DaysCost' : 'FLOAT',
            'Last7DaysConversions' : 'FLOAT'             
            },
            csvData: '',
            accountId: '',
            accountName: '',
            DATA_FUNCTION : function() {
            return getVideoCampaignData(this.csvData, this.accountId, this.accountName);
            }
            },
           
           
            {NAME: 'AdGroups',
            TYPE: 'AdGroups',
            FIELDS: {
            'AccountName' : 'STRING',
            'CampaignId' : 'STRING',             
            'CampaignName' : 'STRING',
            'CampaignStatus' : 'STRING',
            'AdGroupId' : 'STRING',           
            'AdGroupName' : 'STRING',
            'AdGroupStatus' : 'STRING',
            'TargetingSetting' : 'STRING',
            'Last30DaysImpressions' : 'INTEGER',
            'Last30DaysClicks' : 'INTEGER',
            'Last30DaysCost' : 'FLOAT',
            'Last30DaysConversions' : 'FLOAT',
            'Last7DaysImpressions' : 'INTEGER',
            'Last7DaysClicks' : 'INTEGER',
            'Last7DaysCost' : 'FLOAT',
            'Last7DaysConversions' : 'FLOAT'             
            },
            csvData: '',
            accountId: '',
            accountName: '',
            DATA_FUNCTION : function() {
            return getAdGroupData(this.csvData, this.accountId, this.accountName);
            }
            },
           
           {NAME: 'AdGroups',
            TYPE: 'VideoAdGroups',
            FIELDS: {
            'AccountName' : 'STRING',
            'CampaignId' : 'STRING',             
            'CampaignName' : 'STRING',
            'CampaignStatus' : 'STRING',
            'AdGroupId' : 'STRING',           
            'AdGroupName' : 'STRING',
            'AdGroupStatus' : 'STRING',
            'TargetingSetting' : 'STRING',
            'Last30DaysImpressions' : 'INTEGER',
            'Last30DaysClicks' : 'INTEGER',
            'Last30DaysCost' : 'FLOAT',
            'Last30DaysConversions' : 'FLOAT',
            'Last7DaysImpressions' : 'INTEGER',
            'Last7DaysClicks' : 'INTEGER',
            'Last7DaysCost' : 'FLOAT',
            'Last7DaysConversions' : 'FLOAT'             
            },
            csvData: '',
            accountId: '',
            accountName: '',
            DATA_FUNCTION : function() {
            return getVideoAdGroupData(this.csvData, this.accountId, this.accountName);
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
  .forDateRange("LAST_30_DAYS")
  .withCondition("Impressions >= "+ACCOUNT_THRESHOLD) //CONFIG FOR ACCOUNTS
  //.withCondition("ManagerCustomerId IN ['554-466-3055', '867-484-2828']")
  .withCondition("ManagerCustomerId IN ["+ ACCOUNT_ID.toString() + "]")
  .executeInParallel('createData');
}

function createData() {
  
  var account = AdWordsApp.currentAccount();     // Get the current account.     
  var accountId = account.getCustomerId();
  var accountName = account.getName();
  
  processData(accountId, accountName);
  
}


function processData(accountId, accountName) {
  
  Logger.log("processData function starts for "+accountName);
  
  for (var i = 0; i < CONFIG.REPORTS.length; i++) {
    var reportConfig = CONFIG.REPORTS[i];
    var csvData = [];
    
    var dataFunctionObject = {
      csvData: csvData,
      accountId: accountId,
      accountName: accountName,
    }
    
    csvData = reportConfig.DATA_FUNCTION.call(dataFunctionObject);
    // Convert to Blob format.
    if (csvData == ''){ 
      Logger.log("No "+reportConfig.TYPE+" data for account "+accountName);
    } else {
      var csv = csvData.join('\n');
      var blob = Utilities.newBlob(csv, {type: 'text/csv'});
      var blobData = blob.setContentType('application/octet-stream');
      // Load data
      Logger.log("loadDataToBigquery functions starts for "+accountName+" "+reportConfig.TYPE+" data");
      loadDataToBigquery(reportConfig, blobData, 0);
      Logger.log(reportConfig.TYPE+" data loaded into BigQuery for "+accountName);
    }
  }
}

    
function getCampaignData(csvData, accountId, accountName) {
  
  Logger.log("Starting campaign data pull for "+accountName);
  
  var campaignIterator = AdWordsApp.campaigns()
  .forDateRange("LAST_30_DAYS")
  .withCondition("Impressions >= "+CAMPAIGN_THRESHOLD)
  .get();
  
  while (campaignIterator.hasNext()) {
    
    var campaign = campaignIterator.next();    
    var campaignName = campaign.getName();
    var campaignId = campaign.getId();
    var campaignStatus = "";
    if (campaign.isEnabled()) {
      campaignStatus = "Enabled";
    } else if (campaign.isPaused()) {
      campaignStatus = "Paused";
    } else if (campaign.isRemoved()) {
      campaignStatus = "Removed";
    }  
    var adRotationType = campaign.getAdRotationType();
    var biddingStrategyType = campaign.getBiddingStrategyType();
    try {
    var budget = campaign.getBudget();
    var budgetAmount = budget.getAmount();
    var budgetDeliveryMethod = budget.getDeliveryMethod(); 
    } catch (e) {
      var budget = 'No Budget';
      var budgetAmount = '0';
      var budgetDeliveryMethod = 'No Budget'; 
      
    }
    var endDateObject = campaign.getEndDate();
    if (endDateObject == null) {
      var endDate = null;
    } else {
      var date1 = new Date();
      date1.setDate(endDateObject.day);
      date1.setMonth(endDateObject.month-1);
      date1.setFullYear(endDateObject.year);
      var endDate = Utilities.formatDate(date1, "Etc/GMT", "dd/MM/yyyy");
    }
    var budgetOrderIterator = AdWordsApp.budgetOrders()
   .withCondition("Status = ACTIVE")
   .get();
    while (budgetOrderIterator.hasNext()) {
      var budgetOrder = budgetOrderIterator.next();
 
      var budgetOrderEndDateObject = budgetOrder.getEndDateTime();
      if (budgetOrderEndDateObject == null) {
        var endDate = null;
      } else {
        var date3 = new Date();
        date3.setDate(budgetOrderEndDateObject.day);
        date3.setMonth(budgetOrderEndDateObject.month-1);
        date3.setFullYear(budgetOrderEndDateObject.year);
        var budgetOrderEndDate = Utilities.formatDate(date3, "Etc/GMT", "dd/MM/yyyy");
      }
    }
    var startDateObject = campaign.getStartDate();
    var date2 = new Date();
    date2.setDate(startDateObject.day);
    date2.setMonth(startDateObject.month-1);
    date2.setFullYear(startDateObject.year);
    var startDate = Utilities.formatDate(date2, "Etc/GMT", "dd/MM/yyyy");    
    var stats30Days = campaign.getStatsFor("LAST_30_DAYS");
    var impressions30Days = stats30Days.getImpressions();
    var clicks30Days = stats30Days.getClicks();  
    var cost30Days = stats30Days.getCost();
    var conversions30Days = stats30Days.getConversions();
    var stats7Days = campaign.getStatsFor("LAST_7_DAYS");
    var impressions7Days = stats7Days.getImpressions();
    var clicks7Days = stats7Days.getClicks();  
    var cost7Days = stats7Days.getCost();
    var conversions7Days = stats7Days.getConversions();
    var locationIterator = campaign.targeting().targetedLocations().get();
    var targetedCountry = "";
    while (locationIterator.hasNext()) {
      var countryCode = locationIterator.next().getCountryCode();
      targetedCountry = targetedCountry + countryCode + "; ";
    }
    var languageIterator = campaign.targeting().languages().get();
    var targetedLanguage = "";
    while (languageIterator.hasNext()) {
      var language = languageIterator.next().getName();
      targetedLanguage = targetedLanguage + language + "; ";
    }
    var deviceIterator = campaign.targeting().platforms().get();
    var deviceTargeting = "";
    while (deviceIterator.hasNext()) {
      var device = deviceIterator.next();
      var deviceName = device.getName();
      var deviceBidModifier = device.getBidModifier();
      deviceTargeting = deviceTargeting + deviceName + ": " + deviceBidModifier + "; ";
    }
    var excludedContentLabelsIterator = campaign.targeting().excludedContentLabels().get();
    var excludedContentLabels = "";
    while (excludedContentLabelsIterator.hasNext()) {
      var excludedContentLabel = excludedContentLabelsIterator.next().getContentLabelType();
      excludedContentLabels = excludedContentLabels + excludedContentLabel + "; ";
    }
    var excludedTopicsIterator = campaign.display().excludedTopics().get();
    var excludedTopics = "";
    while (excludedTopicsIterator.hasNext()) {
      var excludedTopic = excludedTopicsIterator.next().getTopicId();
      excludedTopics = excludedTopics + excludedTopic + "; ";
    }
    var excludedKeywordsListsIterator = campaign.negativeKeywordLists().get();
    var excludedKeywordsLists = "";
    while (excludedKeywordsListsIterator.hasNext()) {
      var excludedKeywordsList = excludedKeywordsListsIterator.next().getName();
      excludedKeywordsLists = excludedKeywordsLists + excludedKeywordsList + "; ";
    } 
    var excludedPlacementsListsIterator = campaign.excludedPlacementLists().get();
    var excludedPlacementsLists = "";
    while (excludedPlacementsListsIterator.hasNext()) {
      var excludedPlacementsList = excludedPlacementsListsIterator.next().getName();
      excludedPlacementsLists = excludedPlacementsLists + excludedPlacementsList + "; ";
    }
    var frequencyCap = "Not available";
    var excludedYouTubeChannels = "N/A";
    var excludedYouTubeVideos = "N/A";
    var resultsArray = [accountId, accountName.replace(/,/g, ""), campaignId, campaignName.replace(/,/g, ""), campaignStatus, targetedCountry, targetedLanguage, adRotationType, deviceTargeting,
                        biddingStrategyType, budgetAmount, budgetDeliveryMethod, startDate, endDate, budgetOrderEndDate,
                        excludedContentLabels, excludedTopics, excludedKeywordsLists.replace(/,/g, ""), excludedPlacementsLists.replace(/,/g, ""), 
                        excludedYouTubeChannels, excludedYouTubeVideos, frequencyCap,
                        impressions30Days, clicks30Days, cost30Days, conversions30Days,
                        impressions7Days, clicks7Days, cost7Days, conversions7Days];
    csvData.push(resultsArray); 
  }
  
  return csvData
}


function getVideoCampaignData(csvData, accountId, accountName) {
  
  Logger.log("Starting video campaign data pull for "+accountName);

  var campaignIterator = AdWordsApp.videoCampaigns()
  .forDateRange("LAST_30_DAYS")
  .withCondition("Impressions >= "+CAMPAIGN_THRESHOLD)
  .get();  
  
  while (campaignIterator.hasNext()) {
    
    var campaign = campaignIterator.next()
    var campaignName = campaign.getName();
    var campaignId = campaign.getId();
    var campaignStatus = "";
    if (campaign.isEnabled()) {
      campaignStatus = "Enabled";
    } else if (campaign.isPaused()) {
      campaignStatus = "Paused";
    } else if (campaign.isRemoved()) {
      campaignStatus = "Removed";
    }     
    var adRotationType = campaign.getAdRotationType();
    var biddingStrategyType = campaign.getBiddingStrategyType();
    try {
    var budget = campaign.getBudget();
    var budgetAmount = budget.getAmount();
    var budgetDeliveryMethod = budget.getDeliveryMethod(); 
    } catch (e) {
      var budget = 'No Budget';
      var budgetAmount = '0';
      var budgetDeliveryMethod = 'No Budget'; 
      
    }
    var endDateObject = campaign.getEndDate();
    if (endDateObject == null) {
      var endDate = null;
    } else {
      var date1 = new Date();
      date1.setDate(endDateObject.day);
      date1.setMonth(endDateObject.month-1);
      date1.setFullYear(endDateObject.year);
      var endDate = Utilities.formatDate(date1, "Etc/GMT", "dd/MM/yyyy");
    }
    var budgetOrderIterator = AdWordsApp.budgetOrders()
   .withCondition("Status = ACTIVE")
   .get();
    while (budgetOrderIterator.hasNext()) {
      var budgetOrder = budgetOrderIterator.next();
 
      var budgetOrderEndDateObject = budgetOrder.getEndDateTime();
      if (budgetOrderEndDateObject == null) {
        var endDate = null;
      } else {
        var date3 = new Date();
        date3.setDate(budgetOrderEndDateObject.day);
        date3.setMonth(budgetOrderEndDateObject.month-1);
        date3.setFullYear(budgetOrderEndDateObject.year);
        var budgetOrderEndDate = Utilities.formatDate(date3, "Etc/GMT", "dd/MM/yyyy");
      }
    }
    var startDateObject = campaign.getStartDate();
    var date2 = new Date();
    date2.setDate(startDateObject.day);
    date2.setMonth(startDateObject.month-1);
    date2.setFullYear(startDateObject.year);
    var startDate = Utilities.formatDate(date2, "Etc/GMT", "dd/MM/yyyy");
    var stats30Days = campaign.getStatsFor("LAST_30_DAYS");
    var impressions30Days = stats30Days.getImpressions();
    var clicks30Days = stats30Days.getClicks();  
    var cost30Days = stats30Days.getCost();
    var conversions30Days = stats30Days.getConversions();    
    var stats7Days = campaign.getStatsFor("LAST_7_DAYS");
    var impressions7Days = stats7Days.getImpressions();
    var clicks7Days = stats7Days.getClicks();  
    var cost7Days = stats7Days.getCost();
    var conversions7Days = stats7Days.getConversions();     
    var locationIterator = campaign.targeting().targetedLocations().get();
    var targetedCountry = "";
    while (locationIterator.hasNext()) {
      var countryCode = locationIterator.next().getCountryCode();
      targetedCountry = targetedCountry + countryCode + "; ";
    }      
    var languageIterator = campaign.targeting().languages().get();
    var targetedLanguage = "";
    while (languageIterator.hasNext()) {
      var language = languageIterator.next().getName();
      targetedLanguage = targetedLanguage + language + "; ";
    } 
    var deviceIterator = campaign.targeting().platforms().get();
    var deviceTargeting = "";
    while (deviceIterator.hasNext()) {
      var device = deviceIterator.next();
      var deviceName = device.getName();
      var deviceBidModifier = device.getBidModifier();
      deviceTargeting = deviceTargeting + deviceName + ": " + deviceBidModifier + "; ";
    } 
    var excludedContentLabelsIterator = campaign.targeting().excludedContentLabels().get();
    var excludedContentLabels = "";
    while (excludedContentLabelsIterator.hasNext()) {
      var excludedContentLabel = excludedContentLabelsIterator.next().getContentLabelType();
      excludedContentLabels = excludedContentLabels + excludedContentLabel + "; ";
    }
    var excludedTopicsIterator = campaign.videoTargeting().excludedTopics().get();
    var excludedTopics = "";
    while (excludedTopicsIterator.hasNext()) {
      var excludedTopic = excludedTopicsIterator.next().getTopicId();
      excludedTopics = excludedTopics + excludedTopic + "; ";
    }
    var excludedKeywordsListsIterator = campaign.negativeKeywordLists().get();
    var excludedKeywordsLists = "";
    while (excludedKeywordsListsIterator.hasNext()) {
      var excludedKeywordsList = excludedKeywordsListsIterator.next().getName();
      excludedKeywordsLists = excludedKeywordsLists + excludedKeywordsList + "; ";
    } 
    var excludedPlacementsListsIterator = campaign.excludedPlacementLists().get();
    var excludedPlacementsLists = "";
    while (excludedPlacementsListsIterator.hasNext()) {
      var excludedPlacementsList = excludedPlacementsListsIterator.next().getName();
      excludedPlacementsLists = excludedPlacementsLists + excludedPlacementsList + "; ";
    }
    var excludedYouTubeChannelsIterator = campaign.videoTargeting().excludedYouTubeChannels().get();
    var excludedYouTubeChannels = "";
    while (excludedYouTubeChannelsIterator.hasNext()) {
      var excludedYouTubeChannel = excludedYouTubeChannelsIterator.next().getChannelId();
      excludedYouTubeChannels = excludedYouTubeChannels + excludedYouTubeChannel + "; ";
    }
    var excludedYouTubeVideosIterator = campaign.videoTargeting().excludedYouTubeVideos().get();
    var excludedYouTubeVideos = "";
    while (excludedYouTubeVideosIterator.hasNext()) {
      var excludedYouTubeVideo = excludedYouTubeVideosIterator.next().getVideoId();
      excludedYouTubeVideos = excludedYouTubeVideos + excludedYouTubeVideo + "; ";
    }
    var impressionCaps = campaign.getFrequencyCaps().getFrequencyCapFor("IMPRESSION");
    var viewCaps = campaign.getFrequencyCaps().getFrequencyCapFor("VIDEO_VIEW");
    if (impressionCaps != null) {
      var impCapLevel = impressionCaps.getLevel();
      var impCapLimit = impressionCaps.getLimit();
      var impCapTimeUnit = impressionCaps.getTimeUnit();
      var impFrequencyCap = impCapLimit + " impressions per " + impCapTimeUnit + " at " + impCapLevel + " level";
    } else {
      var impFrequencyCap = "No impression frequency cap";
      }
        if (viewCaps != null) {
      var viewCapLevel = viewCaps.getLevel();
      var viewCapLimit = viewCaps.getLimit();
      var viewCapTimeUnit = viewCaps.getTimeUnit();
      var viewFrequencyCap = viewCapLimit + " views per " + viewCapTimeUnit + " at " + viewCapLevel + " level";
    } else {
      var viewFrequencyCap = "No view frequency cap";
      }
    var frequencyCap = impFrequencyCap + "; " + viewFrequencyCap + ";"
    var resultsArray = [accountId, accountName.replace(/,/g, ""), campaignId, campaignName.replace(/,/g, ""), campaignStatus,
                        targetedCountry, targetedLanguage, adRotationType, deviceTargeting,
                        biddingStrategyType, budgetAmount, budgetDeliveryMethod, startDate, endDate, budgetOrderEndDate,
                        excludedContentLabels, excludedTopics, excludedKeywordsLists.replace(/,/g, ""), excludedPlacementsLists.replace(/,/g, ""), 
                        excludedYouTubeChannels, excludedYouTubeVideos, frequencyCap,
                        impressions30Days, clicks30Days, cost30Days, conversions30Days,
                        impressions7Days, clicks7Days, cost7Days, conversions7Days
                       ];
    csvData.push(resultsArray);
  }
  
  return csvData
}


function getAdGroupData(csvData, accountId, accountName) {
  
  Logger.log("Starting ad group data pull for "+accountName);
  
  //AdWordsApp.adGroups().get().next().bidding().getStrategy().getName()
  
  var adGroupIterator = AdWordsApp.adGroups()
  .forDateRange("LAST_30_DAYS")
  .withCondition("Impressions >= "+CAMPAIGN_THRESHOLD)
  .get();
  
  while (adGroupIterator.hasNext()) {
    
    var adGroup = adGroupIterator.next();
    var adGroupName = adGroup.getName();
    var adGroupId = adGroup.getId();
    var adGroupStatus = "";
    if (adGroup.isEnabled()) {
      adGroupStatus = "Enabled";
    } else if (adGroup.isPaused()) {
      adGroupStatus = "Paused";
    } else if (adGroup.isRemoved()) {
      adGroupStatus = "Removed";
    } 
    
    var campaign = adGroup.getCampaign();
    var campaignName = campaign.getName();
    var campaignId = campaign.getId();
    var campaignStatus = "";
    if (campaign.isEnabled()) {
      campaignStatus = "Enabled";
    } else if (campaign.isPaused()) {
      campaignStatus = "Paused";
    } else if (campaign.isRemoved()) {
      campaignStatus = "Removed";
    } 
    
    var targetingSetting = adGroup.targeting().getTargetingSetting("USER_INTEREST_AND_LIST");
    if (targetingSetting !== "TARGET_ALL_FALSE") {
      var targSetting = 'Bid Only'; 
    }
    else {
      var targSetting = 'Target and Bid'; 
    }
    
    var stats30Days = adGroup.getStatsFor("LAST_30_DAYS")
    var impressions30Days = stats30Days.getImpressions();
    var clicks30Days = stats30Days.getClicks();  
    var cost30Days = stats30Days.getCost();
    var conversions30Days = stats30Days.getConversions();
    
    var stats7Days = adGroup.getStatsFor("LAST_7_DAYS")
    var impressions7Days = stats7Days.getImpressions();
    var clicks7Days = stats7Days.getClicks();  
    var cost7Days = stats7Days.getCost();
    var conversions7Days = stats7Days.getConversions();
    

    var resultsArray = [accountId, accountName.replace(/,/g, ""), campaignId, campaignName.replace(/,/g, ""), campaignStatus, adGroupId, adGroupName.replace(/,/g, ""), adGroupStatus, targSetting,
                        impressions30Days, clicks30Days, cost30Days, conversions30Days, impressions7Days, clicks7Days, cost7Days, conversions7Days
                       ];
    csvData.push(resultsArray);
  }
  
  return csvData
  
}

function getVideoAdGroupData(csvData, accountId, accountName) {
  
  Logger.log("Starting video ad group data pull for "+accountName);
  
  //AdWordsApp.adGroups().get().next().bidding().getStrategy().getName()
  
  var adGroupIterator = AdWordsApp.videoAdGroups()
  .forDateRange("LAST_30_DAYS")
  .withCondition("Impressions >= "+CAMPAIGN_THRESHOLD)
  .get();
  
  while (adGroupIterator.hasNext()) {
    
    var adGroup = adGroupIterator.next();
    var adGroupName = adGroup.getName();
    var adGroupId = adGroup.getId();
    var adGroupStatus = "";
    if (adGroup.isEnabled()) {
      adGroupStatus = "Enabled";
    } else if (adGroup.isPaused()) {
      adGroupStatus = "Paused";
    } else if (adGroup.isRemoved()) {
      adGroupStatus = "Removed";
    } 
    
    var campaign = adGroup.getVideoCampaign();
    var campaignName = campaign.getName();
    var campaignId = campaign.getId();
    var campaignStatus = "";
    if (campaign.isEnabled()) {
      campaignStatus = "Enabled";
    } else if (campaign.isPaused()) {
      campaignStatus = "Paused";
    } else if (campaign.isRemoved()) {
      campaignStatus = "Removed";
    } 
    
    var targSetting = "N/A";
    
    var stats30Days = adGroup.getStatsFor("LAST_30_DAYS")
    var impressions30Days = stats30Days.getImpressions();
    var clicks30Days = stats30Days.getClicks();  
    var cost30Days = stats30Days.getCost();
    var conversions30Days = stats30Days.getConversions();
    
    var stats7Days = adGroup.getStatsFor("LAST_7_DAYS")
    var impressions7Days = stats7Days.getImpressions();
    var clicks7Days = stats7Days.getClicks();  
    var cost7Days = stats7Days.getCost();
    var conversions7Days = stats7Days.getConversions();
    

    var resultsArray = [accountId, accountName.replace(/,/g, ""), campaignId, campaignName.replace(/,/g, ""), campaignStatus, adGroupId, adGroupName.replace(/,/g, ""), adGroupStatus, targSetting,
                        impressions30Days, clicks30Days, cost30Days, conversions30Days, impressions7Days, clicks7Days, cost7Days, conversions7Days
                       ];
    csvData.push(resultsArray);
  }
  
  return csvData
  
}


// This function is used in the above function to execute the data load into BigQuery
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
function createTable(reportConfig) {
  var name = CLIENT_NAME + "_" + PLATFORM_NAME + "_" + reportConfig.NAME;
  //var pauseTime = Math.floor((Math.random() * 6) + 1)*5000;
  //Logger.log("Script will be paused for " + pauseTime/1000 + " seconds to avoid API saturation");
  //Utilities.sleep(pauseTime)
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