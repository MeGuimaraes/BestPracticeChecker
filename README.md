# Links 

- O template do dash está neste link:
https://datastudio.google.com/u/0/reporting/f12effda-03b9-4f21-8cdf-8377b21e7115/page/0rNJ/edit

- A planilha contendo a biblioteca com todas as validações e o template de preenchimento está neste link:
https://docs.google.com/spreadsheets/d/1-cTrhWZCOk29JcQrY6TafCeqZN4o9LAZGn4ARMVb_jI/edit#gid=1916748823


# Schema das tabelas
As tabelas no BQ devem conter as seguintes colunas para realizar as validações:

## Google Ads:
1. `[ClientName]_AdWords_AdGroupPerformance`

| fullname	                       | type   | description |
| -----------                      | ------ | ----------- |
| AccountId		                   | STRING |	AccountId |
| AccountDescriptiveName		   | STRING |	AccountDescriptiveName |
| CampaignId		               | STRING |	CampaignId |
| CampaignName		               | STRING |	CampaignName |
| CampaignStatus		           | STRING |	CampaignStatus |
| AdGroupId		                   | STRING |	AdGroupId |
| AdGroupName		               | STRING |	AdGroupName |
| AdGroupStatus		               | STRING |	AdGroupStatus |
| AdNetworkType1		           | STRING |	AdNetworkType1 |
| AdNetworkType2		           | STRING |	AdNetworkType2 |
| BiddingStrategyName		       | STRING |	BiddingStrategyName |
| BiddingStrategyType		       | STRING |	BiddingStrategyType |
| BiddingStrategySource		       | STRING |	BiddingStrategySource |
| CpcBid		                   | FLOAT  |	CpcBid |
| CpmBid		                   | FLOAT  |	CpmBid |
| CpvBid		                   | FLOAT  |	CpvBid |
| EnhancedCpcEnabled		       | STRING |	EnhancedCpcEnabled |
| TargetCpa		                   | FLOAT  |	TargetCpa |
| TargetCpaBidSource		       | STRING |	TargetCpaBidSource |
| AdGroupDesktopBidModifier		   | STRING |	AdGroupDesktopBidModifier |
| AdGroupMobileBidModifier		   | STRING |	AdGroupMobileBidModifier |
| AdGroupTabletBidModifier		   | STRING |	AdGroupTabletBidModifier |
| Cost		                       | FLOAT  |	Cost |
| Impressions		               | INTEGER |	Impressions |
| Clicks		                   | INTEGER |	Clicks |
| Conversions		               | FLOAT  |	Conversions |
| VideoViews		               | INTEGER |	VideoViews |
| VideoQuartile100Rate		       | FLOAT  |	VideoQuartile100Rate |
| VideoQuartile25Rate		       | FLOAT  |	VideoQuartile25Rate |
| VideoQuartile50Rate		       | FLOAT  |	VideoQuartile50Rate |
| VideoQuartile75Rate		       | FLOAT  |	VideoQuartile75Rate |
| AveragePosition		           | FLOAT  |	AveragePosition |
| SearchImpressionShare		       | STRING |	SearchImpressionShare |
| SearchRankLostImpressionShare	   | STRING |	SearchRankLostImpressionShare |
| SearchExactMatchImpressionShare  | STRING |	SearchExactMatchImpressionShare |
| ContentImpressionShare		   | STRING |	ContentImpressionShare |
| ContentRankLostImpressionShare   | STRING |	ContentRankLostImpressionShare |


2. `[ClientName]_AdWords_AdGroups`

| fullname	                        |   type    | description   |
| -----------                       | ------    | ----------- |
| AccountId		                    |   STRING	| AccountId |
| AccountName		                |   STRING	| AccountName   |
| CampaignId		                |   STRING	| CampaignId    |
| CampaignName		                |   STRING	| CampaignName  |
| CampaignStatus		            |   STRING	| CampaignStatus    |
| AdGroupId		                    |   STRING	| AdGroupId |
| AdGroupName		                |   STRING	| AdGroupName   |
| AdGroupStatus		                |   STRING	| AdGroupStatus |
| TargetingSetting		            |   STRING	| TargetingSetting  |
| Last30DaysImpressions		        |   INTEGER	| Last30DaysImpressions |
| Last30DaysClicks		            |   INTEGER	| Last30DaysClicks  |
| Last30DaysCost		            |   FLOAT	| Last30DaysCost    |
| Last30DaysConversions		        |   FLOAT	| Last30DaysConversions |
| Last7DaysImpressions		        |   INTEGER	| Last7DaysImpressions  |
| Last7DaysClicks		            |   INTEGER	| Last7DaysClicks   |
| Last7DaysCost		                |   FLOAT	| Last7DaysCost |
| Last7DaysConversions		        |   FLOAT	| Last7DaysConversions  |


3. `[ClientName]_AdWords_AdPerformance`

|   fullname	                        |   type    | description   |
|   -----------                         | ------    | ----------- |
|   AccountId		                    | STRING	| AccountId |
|   AccountDescriptiveName		        | STRING	| AccountDescriptiveName |
|   CampaignId		                    | STRING	| CampaignId |
|   CampaignName		                | STRING	| CampaignName |
|   CampaignStatus		                | STRING	| CampaignStatus |
|   AdGroupId		                    | STRING	| AdGroupId |
|   AdGroupName		                    | STRING	| AdGroupName |
|   AdGroupStatus		                | STRING	| AdGroupStatus |
|   Id		                            | STRING	| Id |
|   AdType		                        | STRING	| AdType |
|   Status		                        | STRING	| Status |
|   DisplayUrl		                    | STRING	| DisplayUrl |
|   CreativeFinalUrls		            | STRING	| CreativeFinalUrls |
|   Description		                    | STRING	| Description |
|   HeadlinePart1		                | STRING	| HeadlinePart1 |
|   HeadlinePart2		                | STRING	| HeadlinePart2 |
|   ImageCreativeName		            | STRING	| ImageCreativeName |
|   ImageCreativeImageHeight		    | STRING	| ImageCreativeImageHeight |
|   ImageCreativeImageWidth		        | STRING	| ImageCreativeImageWidth |
|   Cost		                        | FLOAT	    | Cost |
|   Impressions		                    | INTEGER	| Impressions |
|   Clicks		                        | INTEGER	| Clicks |
|   Conversions		                    | FLOAT	    | Conversions |
|   VideoViews		                    | INTEGER	| VideoViews |
|   VideoQuartile100Rate		        | FLOAT	    | VideoQuartile100Rate |
|   VideoQuartile25Rate		            | FLOAT	    | VideoQuartile25Rate |
|   VideoQuartile50Rate		            | FLOAT	    | VideoQuartile50Rate |
|   VideoQuartile75Rate		            | FLOAT	    | VideoQuartile75Rate |


4. `[ClientName]_AdWords_AudiencePerfomance`

| fullname	                        |   type    | description   |
| -----------                       | ------    | ----------- |
|AccountId		                    | STRING	| AccountId |
|AccountDescriptiveName		        | STRING	| AccountDescriptiveName |
|CampaignId		                    | STRING	| CampaignId |
|CampaignName		                | STRING	| CampaignName |
|CampaignStatus		                | STRING	| CampaignStatus |
|Id		                            | STRING	| Id |
|UserListName		                | STRING	| UserListName |


5. `[ClientName]_AdWords_CampaignPerformance`

|   fullname	                       |   type | description   |
|   -----------                        | ------ | ----------- |
|   AccountId		                   | STRING	| AccountId |
|   AccountDescriptiveName		       | STRING	| AccountDescriptiveName |
|   CampaignId		                   | STRING	| CampaignId |
|   CampaignName		               | STRING	| CampaignName |
|   CampaignStatus		               | STRING	| CampaignStatus |
|   ServingStatus		               | STRING	| ServingStatus |
|   AdvertisingChannelType		       | STRING	| AdvertisingChannelType |
|   AdvertisingChannelSubType		   | STRING	| AdvertisingChannelSubType |
|   AdNetworkType1		               | STRING	| AdNetworkType1 |
|   AdNetworkType2		               | STRING	| AdNetworkType2 |
|   BiddingStrategyName		           | STRING	| BiddingStrategyName |
|   BiddingStrategyType		           | STRING	| BiddingStrategyType |
|   CampaignDesktopBidModifier		   | STRING	| CampaignDesktopBidModifier |
|   CampaignMobileBidModifier		   | STRING	| CampaignMobileBidModifier |
|   CampaignTabletBidModifier		   | STRING	| CampaignTabletBidModifier |
|   Cost		                       | FLOAT	| Cost |
|   Impressions		                   | INTEGER | Impressions |
|   Clicks		                       | INTEGER | Clicks |
|   Conversions		                   | FLOAT	| Conversions |
|   VideoViews		                   | INTEGER | VideoViews |
|   VideoQuartile100Rate		       | FLOAT	| VideoQuartile100Rate |
|   VideoQuartile25Rate		           | FLOAT	| VideoQuartile25Rate |
|   VideoQuartile50Rate		           | FLOAT	| VideoQuartile50Rate |
|   VideoQuartile75Rate		           | FLOAT	| VideoQuartile75Rate |
|   AveragePosition		               | FLOAT	| AveragePosition |
|   SearchImpressionShare		       | STRING	| SearchImpressionShare |
|   SearchRankLostImpressionShare	   | STRING	| SearchRankLostImpressionShare |
|   SearchBudgetLostImpressionShare	   | STRING	| SearchBudgetLostImpressionShare |
|   ContentImpressionShare		       | STRING	| ContentImpressionShare |
|   ContentRankLostImpressionShare	   | STRING	| ContentRankLostImpressionShare |
|   ContentBudgetLostImpressionShare   | STRING	| ContentBudgetLostImpressionShare |
|   AverageFrequency		           | FLOAT	| AverageFrequency |


6. `[ClientName]_AdWords_Campaigns`

|   fullname	                        |   type    | description   |
|   -----------                         | ------    | ----------- |
|   AccountId		                    | STRING	| AccountId |
|   AccountName		                    | STRING	| AccountName |
|   CampaignId		                    | STRING	| CampaignId |
|   CampaignName		                | STRING	| CampaignName |
|   CampaignStatus		                | STRING	| CampaignStatus |
|   TargetedCountry		                | STRING	| TargetedCountry |
|   TargetedLanguage		            | STRING	| TargetedLanguage |
|   AdRotationType		                | STRING	| AdRotationType |
|   DeviceTargeting		                | STRING	| DeviceTargeting |
|   BiddingStrategyType		            | STRING	| BiddingStrategyType |
|   BudgetAmount		                | FLOAT	    | BudgetAmount |
|   BudgetDeliveryMethod		        | STRING	| BudgetDeliveryMethod |
|   StartDate		                    | STRING	| StartDate |
|   EndDate		                        | STRING	| EndDate |
|   BudgetOrderEndDate		            | STRING	| BudgetOrderEndDate |
|   ExcludedContentLabels		        | STRING	| ExcludedContentLabels |
|   ExcludedTopics		                | STRING	| ExcludedTopics |
|   ExcludedKeywordsLists		        | STRING	| ExcludedKeywordsLists |
|   ExcludedPlacementsLists		        | STRING	| ExcludedPlacementsLists |
|   ExcludedYouTubeChannels		        | STRING	| ExcludedYouTubeChannels |
|   ExcludedYouTubeVideos		        | STRING	| ExcludedYouTubeVideos |
|   FrequencyCap		                | STRING	| FrequencyCap |
|   Last30DaysImpressions		        | INTEGER	| Last30DaysImpressions |
|   Last30DaysClicks		            | INTEGER	| Last30DaysClicks |
|   Last30DaysCost		                | FLOAT	    | Last30DaysCost |
|   Last30DaysConversions		        | FLOAT	    | Last30DaysConversions |
|   Last7DaysImpressions		        | INTEGER	| Last7DaysImpressions |
|   Last7DaysClicks		                | INTEGER	| Last7DaysClicks |
|   Last7DaysCost		                | FLOAT	    | Last7DaysCost |
|   Last7DaysConversions		        | FLOAT	    | Last7DaysConversions |


7. `[ClientName]_AdWords_GeoPerformance`

| fullname	                        |   type    | description   |
| -----------                       | ------    | ----------- |
| AccountId		                    | STRING	| AccountId |
| AccountDescriptiveName		    | STRING	| AccountDescriptiveName |
| CampaignId		                | STRING	| CampaignId |
| CampaignName		                | STRING	| CampaignName |
| CampaignStatus		            | STRING	| CampaignStatus |
| LocationType		                | STRING	| LocationType |
| CountryCriteriaId		            | STRING	| CountryCriteriaId |
| IsTargetingLocation		        | STRING	| IsTargetingLocation |
| Impressions		                | INTEGER	| Impressions |


8. `[ClientName]_AdWords_KeywordPerformance`

|   fullname	                        |   type    | description   |
|   -----------                         | ------    | ----------- |
|   AccountId		                    | STRING	| AccountId |
|   AccountDescriptiveName		        | STRING	| AccountDescriptiveName |
|   CampaignId		                    | STRING	| CampaignId |
|   CampaignName		                | STRING	| CampaignName |
|   CampaignStatus		                | STRING	| CampaignStatus |
|   AdGroupId		                    | STRING	| AdGroupId |
|   AdGroupName		                    | STRING	| AdGroupName |
|   AdGroupStatus		                | STRING	| AdGroupStatus |
|   Id		                            | STRING	| Id |
|   Criteria		                    | STRING	| Criteria |
|   Status		                        | STRING	| Status |
|   ApprovalStatus		                | STRING	| ApprovalStatus |
|   KeywordMatchType		            | STRING	| KeywordMatchType |
|   CriteriaDestinationUrl		        | STRING	| CriteriaDestinationUrl |
|   FinalUrls		                    | STRING	| FinalUrls |
|   FirstPageCpc		                | FLOAT	    | FirstPageCpc |
|   TopOfPageCpc		                | FLOAT	    | TopOfPageCpc |
|   FirstPositionCpc		            | FLOAT	    | FirstPositionCpc |
|   CpcBid		                        | FLOAT	    | CpcBid |
|   CpcBidSource		                | STRING	| CpcBidSource |
|   EnhancedCpcEnabled		            | STRING	| EnhancedCpcEnabled |
|   QualityScore		                | FLOAT	    | QualityScore |
|   Cost		                        | FLOAT	    | Cost |
|   Impressions		                    | INTEGER	| Impressions |
|   Clicks		                        | INTEGER	| Clicks |
|   Conversions		                    | FLOAT	    | Conversions |
|   AveragePosition		                | FLOAT	    | AveragePosition |
|   SearchImpressionShare		        | STRING	| SearchImpressionShare |
|   SearchRankLostImpressionShare		| STRING	| SearchRankLostImpressionShare |
|   SearchExactMatchImpressionShare		| STRING	| SearchExactMatchImpressionShare |


9. `[ClientName]_AdWords_NegativeKeywords`

|   fullname	                        |   type    | description   |
|   -----------                         | ------    | ----------- |
|   AccountId		                    | STRING	| AccountId |
|   AccountDescriptiveName		        | STRING	| AccountDescriptiveName |
|   CampaignId		                    | STRING	| CampaignId |
|   CampaignName		                | STRING	| CampaignName |
|   CampaignStatus		                | STRING	| CampaignStatus |
|   Id		                            | STRING	| Id |
|   Criteria		                    | STRING	| Criteria |
|   KeywordMatchType		            | STRING	| KeywordMatchType |
|   IsNegative		                    | STRING	| IsNegative |




## Meta:
1. `Accounts`

| fullname	                        |   type    | description   |
| -----------                       | ------    | ----------- |
| AccountName		                | STRING	| |
| AccountID		                    | INTEGER	| |
| AccountStatus		                | STRING	| |
| AmountSpent		                | INTEGER	| |
| Balance		                    | INTEGER	| |
| DisabledReason		            | STRING	| |
| SpendCap		                    | INTEGER	| |
| BlockLists		                | STRING	| |
| ClientName		                | STRING	| |
| ClientRegion		                | STRING	| |

2. `AdSets_[ClientName]_LATAM`

| fullname	                            |   type    | description   |
| -----------                           | ------    | ----------- |
|  Name		                            | STRING	| |
|  AccountID		                    | INTEGER	| |
|  CampaignID		                    | INTEGER	| |
|  EffectiveStatus		                | STRING	| |
|  ConfiguredStatus		                | STRING	| |
|  Status		                        | STRING	| |
|  StartTime		                    | STRING	| |
|  EndTime		                        | STRING	| |
|  UpdatedTime		                    | STRING	| |
|  CreatedTime		                    | STRING	| |
|  BidStrategy		                    | STRING	| |
|  BidAmount		                    | INTEGER	| |
|  BillingEvent		                    | STRING	| |
|  DailyBudget		                    | INTEGER	| |
|  LifetimeBudget		                | INTEGER	| |
|  LifetimeImps		                    | INTEGER	| |
|  PacingType		                    | STRING	| |
|  RTBFlag		                        | STRING	| |
|  OptimisationGoal		                | STRING	| |
|  FrequencyEvent		                | STRING	| |
|  FrequencyInterval		            | INTEGER	| |
|  FrequencyAmount		                | INTEGER	| |
|  MaxAge		                        | INTEGER	| |
|  MinAge		                        | INTEGER	| |
|  ExcludedCustomAudiences		        | STRING	| |
|  ExcludedPublisherCategories		    | STRING	| |
|  ExcludedPublisherLists		        | STRING	| |
|  CustomAudiences		                | STRING	| |
|  Targeting		                    | STRING	| |
|  Country		                        | STRING	| |
|  LocationType		                    | STRING	| |
|  Language		                        | STRING	| |
|  DeviceModel		                    | STRING	| |
|  OS		                            | STRING	| |
|  WirelessCarrier		                | STRING	| |
|  Platform		                        | STRING	| |
|  FacebookPosition		                | STRING	| |
|  InstagramPosition		            | STRING	| |
|  Environment		                    | STRING	| |
|  MessengerPosition		            | STRING	| |
|  AudienceNetworkPosition		        | STRING	| |
|  ID		                            | INTEGER	| |
|  Last7DaysImpressions		            | INTEGER	| |
|  Last7DaysClicks		                | INTEGER	| |
|  InventoryFilter		                | STRING	| |
|  DynamicCreative		                | BOOLEAN	| |
|  DailyMinSpendTarget		            | INTEGER	| |
|  DailyMaxSpendCap		                | INTEGER	| |


3. `Ads_[ClientName]_LATAM`

| fullname	                            |   type    | description   |
| -----------                           | ------    | ----------- |
| Name		                            | STRING | |	
| AccountID		                        | INTEGER | |	
| CampaignID		                    | INTEGER | |	
| AdSetID		                        | INTEGER | |	
| EffectiveStatus		                | STRING | |	
| ConfiguredStatus		                | STRING | |	
| Status		                        | STRING | |	
| UpdatedTime		                    | STRING | |	
| CreatedTime		                    | STRING | |	
| FacebookPixels		                | STRING | |	
| TrackingeEvents		                | INTEGER | |	
| CreativeID		                    | STRING | |	
| CreativeStatus		                | STRING | |	
| ID		                            | INTEGER | |	
| LinkURL		                        | STRING | |	
| Title		                            | STRING | |	
| Body		                            | STRING  ||


4. `Campaigns_[ClientName]_LATAM`

| fullname	                            |   type    | description   |
| -----------                           | ------    | ----------- |
| CampaignName		                    | STRING | | 	
| CampaignID		                    | INTEGER | | 	
| AccountID		                        | INTEGER | | 	
| ConfiguredStatus		                | STRING | | 	
| EffectiveStatus		                | STRING | | 	
| Status		                        | STRING | | 	
| Objective		                        | STRING | | 	
| BuyingType		                    | STRING | | 	
| SpendCap		                        | STRING | | 	
| StartTime		                        | STRING | | 	
| StopTime		                        | STRING | | 	
| UpdatedTime		                    | STRING | | 	
| Labels		                        | STRING | | 	
| Spend		                            | FLOAT | | 	
| DailyBudget		                    | FLOAT | | 	

DV360:
1. `[ClientName]_AdvertisersSDFs`

| fullname	                            |   type    | description   |
| -----------                           | ------    | ----------- |
| Advertiser_Id		                    | INTEGER | |	
| Advertiser_Name		                | STRING | |	


2. `[ClientName]_CampaignsSDFs`

| fullname	                                            |   type    | description   |
| -----------                                           | ------    | ----------- |
| Campaign_Id		                                    | INTEGER |	|
| Advertiser_Id		                                    | INTEGER |	|
| Name		                                            | STRING |	|
| Timestamp		                                        | STRING |	|
| Status		                                        | STRING |	|
| Campaign_Goal		                                    | STRING |	|
| Campaign_Goal_KPI		                                | STRING |	|
| Campaign_Goal_KPI_Value		                        | STRING |	|
| Creative_Types		                                | STRING |	|
| Campaign_Budget		                                | STRING |	|
| Campaign_Start_Date		                            | STRING |	|
| Campaign_End_Date		                                | STRING |	|
| Frequency_Enabled		                                | STRING |	|
| Frequency_Exposures		                            | STRING |	|
| Frequency_Period		                                | STRING |	|
| Frequency_Amount		                                | STRING |	|
| Demographic_Targeting_Gender		                    | STRING |	|
| Demographic_Targeting_Age		                        | STRING |	|
| Demographic_Targeting_Household_Income		        | STRING |	|
| Demographic_Targeting_Parental_Status		            | STRING |	|
| Geography_Targeting_Include		                    | STRING |	|
| Geography_Targeting_Exclude		                    | STRING |	|
| Language_Targeting_Include		                    | STRING |	|
| Language_Targeting_Exclude		                    | STRING |	|
| Brand_Safety_Labels		                            | STRING |	|
| Brand_Safety_Sensitivity_Setting		                | STRING |	|
| Brand_Safety_Custom_Settings		                    | STRING |	|
| Third_Party_Verification_Services		                | STRING |	|
| Third_Party_Verification_Labels		                | STRING |	|
| Viewability_Targeting_Active_View		                | STRING |	|
| Position_Targeting_Display_OnScreen		            | STRING |	|
| Position_Targeting_Video_OnScreen		                | STRING |	|
| Position_Targeting_Display_InContent		            | STRING |	|
| Position_Targeting_Video_InContent		            | STRING |	|
| Inventory_Source_Targeting_Authorized_Seller_Only		| STRING |	|
| Inventory_Source_Targeting_Include		            | STRING |	|
| Inventory_Source_Targeting_Exclude		            | STRING |	|
| Inventory_Source_Targeting_Target_New_Exchanges		| STRING |	|
| Environment_Targeting		                            | STRING |	|


3. `[ClientName]_InsertionOrdersSDFs`

| fullname	                                                |   type    | description   |
| -----------                                               | ------    | ----------- |
| Io_Id		                                                | INTEGER	| |
| Campaign_Id		                                        | INTEGER	| |
| Name		                                                | STRING	| |
| Timestamp		                                            | STRING	| |
| Status		                                            | STRING	| |
| Io_Type		                                            | STRING	| |
| Fees		                                                | STRING	| |
| Integration_Code		                                    | STRING	| |
| Details		                                            | STRING	| |
| Pacing		                                            | STRING	| |
| Pacing_Rate		                                        | STRING	| |
| Pacing_Amount		                                        | FLOAT	    | |
| Frequency_Enabled		                                    | STRING	| |
| Frequency_Exposures		                                | INTEGER	| |
| Frequency_Period		                                    | STRING	| |
| Frequency_Amount		                                    | INTEGER	| |
| Performance_Goal_Type		                                | STRING	| |
| Performance_Goal_Value		                            | STRING	| |
| Measure_DAR		                                        | STRING	| |
| Measure_DAR_Channel		                                | INTEGER	| |
| Budget_Type		                                        | STRING	| |
| Budget_Segments		                                    | STRING	| |
| Auto_Budget_Allocation		                            | STRING	| |
| Geography_Targeting_Include		                        | STRING	| |
| Geography_Targeting_Exclude		                        | STRING	| |
| Language_Targeting_Include		                        | STRING	| |
| Language_Targeting_Exclude		                        | STRING	| |
| Device_Targeting_Include		                            | STRING	| |
| Device_Targeting_Exclude		                            | STRING	| |
| Browser_Targeting_Include		                            | STRING	| |
| Browser_Targeting_Exclude		                            | STRING	| |
| Digital_Content_Labels_Exclude		                    | STRING	| |
| Brand_Safety_Sensitivity_Setting		                    | STRING	| |
| Brand_Safety_Custom_Settings		                        | STRING	| |
| Third_Party_Verification_Services		                    | STRING	| |
| Third_Party_Verification_Labels		                    | STRING	| |
| Channel_Targeting_Include		                            | STRING	| |
| Channel_Targeting_Exclude		                            | STRING	| |
| Site_Targeting_Include		                            | STRING	| |
| Site_Targeting_Exclude		                            | STRING	| |
| App_Targeting_Include		                                | STRING	| |
| App_Targeting_Exclude		                                | STRING	| |
| App_Collection_Targeting_Include		                    | STRING	| |
| App_Collection_Targeting_Exclude		                    | STRING	| |
| Category_Targeting_Include		                        | STRING	| |
| Category_Targeting_Exclude		                        | STRING	| |
| Keyword_Targeting_Include		                            | STRING	| |
| Keyword_Targeting_Exclude		                            | STRING	| |
| Keyword_List_Targeting_Exclude		                    | STRING	| |
| Audience_Targeting_Similar_Audiences		                | STRING	| |
| Audience_Targeting_Include		                        | STRING	| |
| Audience_Targeting_Exclude		                        | STRING	| |
| Affinity_In_Market_Targeting_Include		                | STRING	| |
| Affinity_In_Market_Targeting_Exclude		                | STRING	| |
| Custom_List_Targeting		                                | STRING	| |
| Inventory_Source_Targeting_Authorized_Seller_Options      | STRING	| |
| Inventory_Source_Targeting_Include		                | STRING	| |
| Inventory_Source_Targeting_Exclude		                | STRING	| |
| Inventory_Source_Targeting_Target_New_Exchanges		    | STRING	| |
| Daypart_Targeting		                                    | STRING	| |
| Daypart_Targeting_Time_Zone		                        | STRING	| |
| Environment_Targeting		                                | STRING	| |
| Viewability_Targeting_Active_View		                    | FLOAT	    | |
| Position_Targeting_Display_On_Screen		                | STRING	| |
| Position_Targeting_Video_On_Screen		                | STRING	| |
| Position_Targeting_Display_Position_In_Content		    | STRING	| |
| Position_Targeting_Video_Position_In_Content		        | STRING	| |
| Position_Targeting_Audio_Position_In_Content		        | STRING	| |
| Video_Player_Size_Targeting		                        | STRING	| |
| Demographic_Targeting_Gender		                        | STRING	| |
| Demographic_Targeting_Age		                            | STRING	| |
| Demographic_Targeting_Household_Income		            | STRING	| |
| Demographic_Targeting_Parental_Status		                | STRING	| |
| Connection_Speed_Targeting		                        | STRING	| |
| Carrier_Targeting_Include		                            | STRING	| |
| Carrier_Targeting_Exclude		                            | STRING	| |
| Insertion_Order_Optimization		                        | STRING	| |
| Bid_Strategy_Unit		                                    | STRING	| |
| Bid_Strategy_Do_Not_Exceed		                        | STRING	| |
| Apply_Floor_Price_For_Deals		                        | STRING	| |


4. `[ClientName]_LineItemsSDFs`

| fullname	                                                |   type    | description   |
| -----------                                               | ------    | ----------- |
| Line_Item_Id		                                        | INTEGER | |	
| Io_Id		                                                | INTEGER | |	
| Type		                                                | STRING | |	
| Subtype		                                            | STRING | |	
| Name		                                                | STRING | |	
| Timestamp		                                            | STRING | |	
| Status		                                            | STRING | |	
| Start_Date		                                        | STRING | |	
| End_Date		                                            | STRING | |	
| Budget_Type		                                        | STRING | |	
| Budget_Amount		                                        | FLOAT | |	
| Pacing		                                            | STRING | |	
| Pacing_Rate		                                        | STRING | |	
| Pacing_Amount	                                            | FLOAT | |	
| Frequency_Enabled		                                    | STRING | |	
| Frequency_Exposures		                                | INTEGER | |	
| Frequency_Period		                                    | STRING | |	
| Frequency_Amount		                                    | INTEGER | |	
| TrueView_View_Frequency_Enabled		                    | STRING | |	
| TrueView_View_Frequency_Exposures		                    | INTEGER | |	
| TrueView_View_Frequency_Period		                    | STRING | |	
| Partner_Revenue_Model		                                | STRING | |	
| Partner_Revenue_Amount		                            | FLOAT | |	
| Conversion_Counting_Type		                            | STRING | |	
| Conversion_Counting_Pct		                            | FLOAT | |	
| Conversion_Floodlight_Activity_Ids		                | STRING | |	
| Fees		                                                | STRING | |	
| Integration_Code		                                    | STRING | |	
| Details		                                            | STRING | |	
| Bid_Strategy_Type		                                    | STRING | |	
| Bid_Strategy_Value		                                | STRING | |	
| Bid_Strategy_Unit		                                    | STRING | |	
| Bid_Strategy_Do_Not_Exceed		                        | FLOAT | |	
| Apply_Floor_Price_For_Deals		                        | STRING | |	
| Creative_Assignments		                                | STRING | |	
| Geography_Targeting_Include		                        | STRING | |	
| Geography_Targeting_Exclude		                        | STRING | |	
| Geography_Regional_Location_List_Targeting_Include		| STRING | |	
| Geography_Regional_Location_List_Targeting_Exclude		| STRING | |	
| Language_Targeting_Include		                        | STRING | |	
| Language_Targeting_Exclude		                        | STRING | |	
| Device_Targeting_Include		                            | STRING | |	
| Device_Targeting_Exclude		                            | STRING | |	
| Browser_Targeting_Include		                            | STRING | |	
| Browser_Targeting_Exclude		                            | STRING | |	
| Digital_Content_Labels_Exclude		                    | STRING | |	
| Brand_Safety_Sensitivity_Setting		                    | STRING | |	
| Brand_Safety_Custom_Settings		                        | STRING | |	
| Third_Party_Verification_Services		                    | STRING | |	
| Third_Party_Verification_Labels		                    | STRING | |	
| Channel_Targeting_Include		                            | STRING | |	
| Channel_Targeting_Exclude		                            | STRING | |	
| Site_Targeting_Include		                            | STRING | |	
| Site_Targeting_Exclude		                            | STRING | |	
| App_Targeting_Include		                                | STRING | |	
| App_Targeting_Exclude		                                | STRING | |	
| App_Collection_Targeting_Include		                    | STRING | |	
| App_Collection_Targeting_Exclude		                    | STRING | |	
| Category_Targeting_Include		                        | STRING | |	
| Category_Targeting_Exclude		                        | STRING | |	
| Keyword_Targeting_Include		                            | STRING | |	
| Keyword_Targeting_Exclude		                            | STRING | |	
| Keyword_List_Targeting_Exclude		                    | STRING | |	
| Audience_Targeting_Similar_Audiences		                | STRING | |	
| Audience_Targeting_Include		                        | STRING | |	
| Audience_Targeting_Exclude		                        | STRING | |	
| Affinity_In_Market_Targeting_Include		                | STRING | |	
| Affinity_In_Market_Targeting_Exclude		                | STRING | |	
| Custom_List_Targeting		                                | STRING | |	
| Inventory_Source_Targeting_Authorized_Seller_Options      | STRING | |	
| Inventory_Source_Targeting_Include		                | STRING | |	
| Inventory_Source_Targeting_Exclude		                | STRING | |	
| Inventory_Source_Targeting_Target_New_Exchanges		    | STRING | |	
| Daypart_Targeting		                                    | STRING | |	
| Daypart_Targeting_Time_Zone		                        | STRING | |	
| Environment_Targeting		                                | STRING | |	
| Viewability_Targeting_Active_View		                    | FLOAT | |	
| Position_Targeting_On_Screen		                        | STRING | |	
| Position_Targeting_Display_Position_In_Content		    | STRING | |	
| Position_Targeting_Video_Position_In_Content		        | STRING | |	
| Position_Targeting_Audio_Position_In_Content		        | STRING | |	
| Video_Player_Size_Targeting		                        | STRING | |	
| Demographic_Targeting_Gender		                        | STRING | |	
| Demographic_Targeting_Age		                            | STRING | |	
| Demographic_Targeting_Household_Income		            | STRING | |	
| Demographic_Targeting_Parental_Status		                | STRING | |	
| Connection_Speed_Targeting		                        | STRING | |	
| Carrier_Targeting_Include		                            | STRING | |	
| Carrier_Targeting_Exclude		                            | STRING | |	
| Bid_Multipliers		                                    | STRING | |	
| TrueView_Video_Ad_Formats		                            | STRING | |	
| TrueView_Bid_Strategy_Type		                        | STRING | |	
| TrueView_Bid_Strategy_Value		                        | FLOAT | |	
| TrueView_Mobile_Bid_Adjustment_Option		                | STRING | |	
| TrueView_Mobile_Bid_Adjustment_Percentage		            | FLOAT | |	
| TrueView_Desktop_Bid_Adjustment_Option		            | STRING | |	
| TrueView_Desktop_Bid_Adjustment_Percentage		        | FLOAT | |	
| TrueView_Tablet_Bid_Adjustment_Option		                | STRING | |	
| TrueView_Tablet_Bid_Adjustment_Percentage		            | FLOAT | |	
| TrueView_Connected_TV_Bid_Adjustment_Option		        | STRING | |	
| TrueView_Connected_TV_Bid_Adjustment_Percentage		    | FLOAT | |	
| TrueView_Category_Exclusions_Targeting		            | STRING | |	
| TrueView_Content_Filter		                            | STRING | |	
| TrueView_Inventory_Source_Targeting		                | STRING | |	
| TrueView_ThirdParty_Viewability_Vendor		            | STRING | |	
| TrueView_ThirdParty_Brand_Safety_Vendor		            | STRING | |	


5. `[ClientName]_TrueViewAdsSDFs`

| fullname	                            |   type    | description   |
| -----------                           | ------    | ----------- |
| Ad_Id		                            | INTEGER	| |
| Ad_Group_Id		                    | INTEGER	| |
| Name		                            | STRING	| |
| Status		                        | STRING	| |
| Video_Id		                        | STRING	| |
| Display_URL		                    | STRING	| |
| Landing_Page_URL		                | STRING	| |
| Click_Tracker_URL		                | STRING	| |
| In_stream_Custom_Parameters		    | STRING	| |
| Action_Button_Label		            | STRING	| |
| Action_Headline		                | STRING	| |
| Video_Discovery_Video_Thumbnail		| STRING	| |
| Video_Discovery_Headline		        | STRING	| |
| Video_Discovery_Description_1		    | STRING	| |
| Video_Discovery_Description_2		    | STRING	| |
| Video_Discovery_Landing_Page		    | STRING	| |
| DCM_Tracking_Placement_Id		        | INTEGER	| |
| DCM_Tracking_Ad_Id		            | INTEGER	| |
| DCM_Tracking_Creative_Id		        | INTEGER	| |


## Opportunities:

| fullname	                            |   type    | description   |
| -----------                           | ------    | ----------- |
| OpportunityDate		                | DATE | |	
| Importance		                    | STRING | |	
| Channel		                        | STRING | |	
| Platform		                        | STRING | |	
| PlatformID		                    | INTEGER | |	
| Client		                        | STRING | |	
| ManagingRegion		                | STRING | |	
| Account		                        | STRING | |	
| AccountID		                        | STRING | |	
| Campaign		                        | STRING | |	
| CampaignID		                    | STRING | |	
| AdGroup		                        | STRING | |	
| AdGroupID		                        | STRING | |	
| OpportunityType		                | STRING | |	
| OpportunityTypeID		                | INTEGER | |	
| IntendedSetup		                    | STRING | |	
| ActualSetup		                    | STRING | |	
| OpportunityID		                    | STRING | |	
| Exception		                        | BOOLEAN | |	