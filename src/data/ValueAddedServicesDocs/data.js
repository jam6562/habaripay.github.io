import { colors } from "../constants";

export const vendAirtimeAPI = [
  {
    title: "Body",
    children: [
      {
        key: "phone_number",
        dataType: "String",
        description: "11 digit phone number. Format: : '08139011943'",
        required: true,
      },
      {
        key: "amount",
        dataType: "Integer",
        description: "Amount is in Naira.",
        required: true,
      },
    ],
  },
];

export const vendAirtimeResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{ 
            "status": 200, 
            "success": true, 
            "message": "Success", 
            "data": { 
                "reference": "app_08139011943_5000_1690387362399", 
                "amount": "5000.00", 
                "merchant_amount": "4900.00", 
                "phone_number": "08139011943", 
                "merchant_id": "T6AGJQEY", 
                "wallet_batch_id": "20230726160242715_490000_T6AGJQEY_AIRTIME_NGN", 
                "transaction_id": "app_08139011943_5000_1690387362399", 
                "type": "airtime", 
                "action": "debit", 
                "status": "pending", 
                "meta": "{\"vending_status\":\"pending\",\"status_code\":\"301\",\"message\":\"pending confirmation\",\"phonenumber\":\"08139011943\",\"transaction_id\":\"app_08139011943_5000_1690387362399\",\"network\":\"MTN\"}", 
                "createdAt": "2023-07-26T16:02:43.341Z" 
            } 
}`,
  },
  {
    status: "401:Unathorized",
    responseMsg: "No Authorization",
    pill: colors.orangeColor,
    code: `{
            "success": false,
            "message": "",
            "data": {}
}`,
  },
  {
    status: "403:Forbidden",
    responseMsg: "Invalid/Wrong API Keys",
    pill: colors.orangeColor,
    code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
}`,
  },
];

export const vendDataBundlesAPI = [
  {
    title: "Body",
    children: [
      {
        key: "phone_number",
        dataType: "String",
        description: "11 digit phone number. Format: : '08139011943'",
        required: true,
      },
      {
        key: "plan_code",
        dataType: "String",
        description:
          "The plan code is gotten from the Get Plan Code endpoint and usually in the format: '1001'",
        required: true,
      },
    ],
  },
];

export const vendDataBundlesResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{ 
            "status": 200, 
            "success": true, 
            "message": "Success", 
            "data": { 
                "reference": "app_7062918558_100_1001_1679914203047", 
                "amount": "100.00", 
                "merchant_amount": "98.00", 
                "phone_number": "+2347062918558", 
                "merchant_id": "AABBCCDDEEFFGGHHJJKK", 
                "wallet_batch_id": "BC8BE65JWG44ZW7AN9KG", 
                "transaction_id": "edf867fa-8ad6-4eac-bd87-6e5f8ec9b945", 
                "type": "data", 
                "action": "debit", 
                "status": "success", 
                "meta": "{\"vending_status\":\"success\",\"status_code\":\"200\",\"message\":\"successfully submitted for processing\",\"phonenumber\":\"07062918558\",\"transaction_id\":\"edf867fa-8ad6-4eac-bd87-6e5f8ec9b945\",\"network\":\"MTN\"}", 
                "createdAt": "2023-03-27T10:50:04.073Z" 
            } 
}`,
  },
  {
    status: "401:Unathorized",
    responseMsg: "No Authorization keys",
    pill: colors.orangeColor,
    code: `{
            "success": false,
            "message": "",
            "data": {}
}`,
  },
  {
    status: "403:Forbidden",
    responseMsg: "Invalid/Wrong Keys",
    pill: colors.orangeColor,
    code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
}`,
  },
];

export const getDataBundlesAPI = [
  {
    title: "Query",
    children: [
      {
        key: "network",
        dataType: "String",
        description: "Teleco ID: MTN, GLO, AIRTEL, 9MOBILE",
        required: true,
      },
    ],
  },
];

export const getDataBundlesResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{ 
            "status": 200, 
            "success": true, 
            "message": "Success", 
            "data": [ 
                { 
                    "plan_name": "MTN data_plan", 
                    "bundle_value": "100MB ", 
                    "bundle_validity": " Daily Plan", 
                    "bundle_description": " Daily Plan", 
                    "bundle_price": "100", 
                    "plan_code": "1001", 
                    "network": "MTN" 
                }, 
                { 
                    "plan_name": "MTN data_plan", 
                    "bundle_value": "200MB", 
                    "bundle_validity": " 2-day Plan", 
                    "bundle_description": " 2-day Plan", 
                    "bundle_price": "200", 
                    "plan_code": "1002", 
                    "network": "MTN" 
                }, 
                { 
                    "plan_name": "MTN data_plan", 
                    "bundle_value": "350MB", 
                    "bundle_validity": " Weekly Plan", 
                    "bundle_description": " Weekly Plan", 
                    "bundle_price": "300", 
                    "plan_code": "1003", 
                    "network": "MTN" 
                }, 
                { 
                    "plan_name": "MTN data_plan", 
                    "bundle_value": "750MB", 
                    "bundle_validity": " 2-Week plan", 
                    "bundle_description": " 2-Week plan", 
                    "bundle_price": "500", 
                    "plan_code": "1004", 
                    "network": "MTN" 
                }, 
                        { 
                    "plan_name": "MTN data_plan", 
                    "bundle_value": "1500GB", 
                    "bundle_validity": "365 days", 
                    "bundle_description": "365 days", 
                    "bundle_price": "450000", 
                    "plan_code": "1111", 
                    "network": "MTN" 
                } 
            ] 
} `,
  },
  {
    status: "401:Unathorized",
    responseMsg: "No Authorization",
    pill: colors.orangeColor,
    code: `{
            "success": false,
            "message": "",
            "data": {}
}`,
  },
  {
    status: "403:Forbidden",
    responseMsg: "Invalid/Wrong Keys",
    pill: colors.orangeColor,
    code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
}`,
  },
];


export const getAllTransactionsAPI = [
  {
    title: "Query",
    children: [
      {
        key: "page",
        dataType: "Integer",
        description: "The page of the transaction you want to view",
        required: false,
      },
      {
        key: "perPage",
        dataType: "Integer",
        description: "Number of transaction you want to view per page",
        required: false,
      },
      {
        key: "action",
        dataType: "string",
        description: "The type of transaction you want to see: 'debit'",
        required: false,
      },
    ],
  },
];

export const getAllTransactionsResponse = [
  {
    status: "200:OK",
    responseMsg: "Response description",
    pill: colors.greenColor,
    code: `{ 
            "status": 200, 
            "success": true, 
            "message": "Success", 
            "data": { 
                "count": 5, 
                "rows": [ 
                    { 
                        "reference": "app_08139011943_5000_1690387362399", 
                        "amount": "5000.00", 
                        "merchant_amount": "4900.00", 
                        "phone_number": "08139011943", 
                        "merchant_id": "T6AGJQEY", 
                        "wallet_batch_id": "20230726160242715_490000_T6AGJQEY_AIRTIME_NGN", 
                        "transaction_id": "app_08139011943_5000_1690387362399", 
                        "type": "airtime", 
                        "action": "debit", 
                        "status": "pending", 
                        "meta": "{\"vending_status\":\"pending\",\"status_code\":\"301\",\"message\":\"pending confirmation\",\"phonenumber\":\"08139011943\",\"transaction_id\":\"app_08139011943_5000_1690387362399\",\"network\":\"MTN\"}", 
                        "createdAt": "2023-07-26T16:02:43.341Z" 
                    }, 
                    { 
                        "reference": "app_08132448598_500_1001_1690387247434", 
                        "amount": "500.00", 
                        "merchant_amount": "490.00", 
                        "phone_number": "08132448598", 
                        "merchant_id": "T6AGJQEY", 
                        "wallet_batch_id": "20230726160047736_49000_T6AGJQEY_DATA__NGN", 
                        "transaction_id": null, 
                        "type": "data", 
                        "action": "debit", 
                        "status": "failed", 
                        "meta": null, 
                        "createdAt": "2023-07-26T16:00:48.212Z" 
                    }, 
                    { 
                        "reference": "app_08139011943_5000_1001_1690387152681", 
                        "amount": "5000.00", 
                        "merchant_amount": "4900.00", 
                        "phone_number": "08139011943", 
                        "merchant_id": "T6AGJQEY", 
                        "wallet_batch_id": "20230726155914250_490000_T6AGJQEY_DATA__NGN", 
                        "transaction_id": null, 
                        "type": "data", 
                        "action": "debit", 
                        "status": "failed", 
                        "meta": null, 
                        "createdAt": "2023-07-26T15:59:15.602Z" 
                    }, 
                    { 
                        "reference": "app_08139011943_5000_1690363943917", 
                        "amount": "5000.00", 
                        "merchant_amount": "4900.00", 
                        "phone_number": "08139011943", 
                        "merchant_id": "T6AGJQEY", 
                        "wallet_batch_id": "20230726093224159_490000_T6AGJQEY_AIRTIME_NGN", 
                        "transaction_id": "app_08139011943_5000_1690363943917", 
                        "type": "airtime", 
                        "action": "debit", 
                        "status": "pending", 
                        "meta": "{\"vending_status\":\"pending\",\"status_code\":\"301\",\"message\":\"pending confirmation\",\"phonenumber\":\"08139011943\",\"transaction_id\":\"app_08139011943_5000_1690363943917\",\"network\":\"MTN\"}", 
                        "createdAt": "2023-07-26T09:32:24.638Z" 
                    } 
                ] 
            } 
}`,
  },
  {
    status: "401:Unathorized",
    responseMsg: "Response description",
    pill: colors.orangeColor,
    code: `{
            "success": false,
            "message": "",
            "data": {}
}`,
  },
  {
    status: "403:Forbidden",
    responseMsg: "Response description",
    pill: colors.orangeColor,
    code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
}`,
  },
];

export const createBucketAPI = [
  {
    title: "Body",
    children: [
      {
        key: "name",
        dataType: "String",
        description: "Name of Bucket",
        required: true,
      },
      {
        key: "Description",
        dataType: "String",
        description: "Description of Bucket",
        required: true,
      },
      {
        key: "Cliet_id",
        dataType: "Integer",
        description: "Unique client ID as pre-assigned",
        required: true,
      },
      {
        key: "items",
        dataType: "object",
        description: "Phone number and detail of each",
        required: true,
      },
    ],
  },
];

export const createBucketResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{ 
            "status": "CREATED",
            "message": "bucket created successfully",
            "data": {
              "id": 2,
              "name": "nov2022",
              "description": "november birthdays",
              "params": [
                  "phone_number",
                  "param1"
              ],
              "client_id": 1,
              "created_at": "2024-04-08T11:55:08.000Z",
              "created_by": 1,
              "updated_at": null,
              "updated_by": null,
              "bucket_items": 2
            }
}`
  },
];

export const getBucketResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{ 
            "status": "CREATED",
            "message": "bucket created successfully",
            "data": {
              "id": 2,
              "name": "nov2022",
              "description": "november birthdays",
              "params": [
                  "phone_number",
                  "param1"
              ],
              "client_id": 1,
              "created_at": "2024-04-08T11:55:08.000Z",
              "created_by": 1,
              "updated_at": null,
              "updated_by": null,
              "bucket_items": 2
            }
}`
  },
];

export const updateBucketResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{ 
            "message": "success",
            "data": {
                "id": 1,
                "name": "nov2023_bucket",
                "description": "november birthdays",
                "params": [
                    "phone_number",
                    "param1"
                ],
                "client_id": 1,
                "created_at": "2024-02-29T11:22:51.000Z",
                "created_by": 8,
                "updated_at": "2024-04-08T12:47:21.000Z",
                "updated_by": 1
              }
}`
  },
];

export const deleteBucketResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{ 
          "message": "success"
}`
  },
];

export const createTemplateAPI = [
  {
    title: "Body",
    children: [
      {
        key: "name",
        dataType: "String",
        description: "Name of Template",
        required: true,
      },
      {
        key: "Body",
        dataType: "String",
        description: "Actual template form to be used continuously",
        required: true,
      },
      {
        key: "Cliet_id",
        dataType: "Integer",
        description: "Unique client ID pre-assigned",
        required: true,
      },
      {
        key: "Description",
        dataType: "String",
        description: "Description of template",
        required: true,
      },
    ],
  },
];

export const createTemplateResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{
        "status": "CREATED",
        "message": "template created successfully",
        "data": {
            "id": 5,
            "name": "CHDP_C",
            "description": "CASH DEPOSIT CREDITING",
            "client_id": 2,
            "created_at": "2024-04-08T13:02:44.000Z",
            "created_by": 1,
            "updated_at": null,
            "updated_by": null
        }
}`
  },
];

export const getTemplateResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{
        "status": "SUCCESS",
        "message": "templates retrieved successfully",
        "data": {
            "items": [
                {
                    "id": 2,
                    "name": "FTRQ_D",
                    "body": "Txn: Debit\nAc:#$TXN_ACC$#\nAmt:#$AMOUNT$#\nDes:AAC/Debit/Funds Transfer/#$TRANSACTION_ID$#\nDate:#$TXN_DATE$#\nBal:#$AVAIL_BAL$#\n#$sms_advert$#",
                    "description": "FUNDS TRANSFER DEBIT",
                    "client_id": 2,
                    "params": [
                        "phone_number",
                        "TXN_ACC",
                        "AMOUNT",
                        "TRANSACTION_ID",
                        "TXN_DATE",
                        "AVAIL_BAL",
                        "sms_advert"
                    ],
                    "created_at": "2024-03-20T20:28:53.000Z",
                    "created_by": 10,
                    "updated_at": "2024-03-26T06:48:22.000Z",
                    "updated_by": 10
                },
                {
                    "id": 3,
                    "name": "FTRQ_C",
                    "body": "Credit\nAc:#$OFS_ACC$#\nAmt:#$CCY$##$AMOUNT$#\nDes:AAC/Credit/Funds Transfer/#$TRANSACTION_ID$#\nDate:#$TXN_DATE$#\nBal:#$CCY$##$AVAIL_BAL$#\n#$sms_advert$#",
                    "description": "FUNDS TRANSFER CREDIT",
                    "client_id": 2,
                    "params": [
                        "phone_number",
                        "OFS_ACC",
                        "CCY",
                        "AMOUNT",
                        "TRANSACTION_ID",
                        "TXN_DATE",
                        "CCY",
                        "AVAIL_BAL",
                        "sms_advert"
                    ],
                    "created_at": "2024-03-20T20:31:37.000Z",
                    "created_by": 10,
                    "updated_at": "2024-03-26T06:53:23.000Z",
                    "updated_by": 10
                },
                {
                    "id": 4,
                    "name": "CHDP_C",
                    "body": "Txn: Credit\nAc:#$TXN_ACC$#\nAmt:#$AMOUNT$#\nDes:Cash Dep/_BRC_/#$OFS_ACC$#/#$TRANSACTION_ID$#\nDate:#$TXN_DATE$#\nBal#$CCY$##$AVAIL_BAL$#\n#$sms_advert$#",
                    "description": "CASH DEPOSIT CREDIT",
                    "client_id": 2,
                    "params": [
                        "phone_number",
                        "TXN_ACC",
                        "AMOUNT",
                        "OFS_ACC",
                        "TRANSACTION_ID",
                        "TXN_DATE",
                        "CCY",
                        "AVAIL_BAL",
                        "sms_advert"
                    ],
                    "created_at": "2024-03-20T20:39:02.000Z",
                    "created_by": 10,
                    "updated_at": "2024-03-26T06:53:09.000Z",
                    "updated_by": 10
                },
                {
                    "id": 5,
                    "name": "CHDP_C",
                    "body": "Txn: Credit\nAc:#$TXN_ACC$#\nAmt:#$AMOUNT$#\nDes:Cash Dep/_BRC_/#$OFS_ACC$#/#$TRANSACTION_ID$#\nDate:#$TXN_DATE$#\nBal#$CCY$##$AVAIL_BAL$#\n#$sms_advert#",
                    "description": "CASH DEPOSIT CREDITING",
                    "client_id": 2,
                    "params": [
                        "phone_number",
                        "TXN_ACC",
                        "AMOUNT",
                        "OFS_ACC",
                        "TRANSACTION_ID",
                        "TXN_DATE",
                        "CCY",
                        "AVAIL_BAL"
                    ],
                    "created_at": "2024-04-08T13:02:44.000Z",
                    "created_by": 1,
                    "updated_at": null,
                    "updated_by": null
                }
            ],
            "total": 4
        }
    }`
  },
];

export const updateTemplateAPI = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{
    "message": "success"
}`
  },
];

export const updateTemplateResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{ 
          "status": "SUCCESS",
          "message": "template updated successfully",
          "data": {
              "id": 3,
              "name": "FTRQ_C",
              "description": "FUNDS TRANSFER CREDIT",
              "client_id": 2,
              "created_at": "2024-03-20T20:31:37.000Z",
              "created_by": 10,
              "updated_at": "2024-04-08T13:08:32.000Z",
              "updated_by": 1
          }
}`
  },
];

export const deleteTemplateResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{
    "message": "success"
}`
  },
];

export const sendMessageAPI = [
  {
    title: "Body",
    children: [
      {
        key: "is_campaign",
        dataType: "Boolean",
        description: "Set true if message is a campaign",
        required: true,
      },
      {
        key: "reference",
        dataType: "String",
        description: "Optional reference but necessary to group campaign",
        required: false,
      },
      {
        key: "use_bucket",
        dataType: "Boolean",
        description: "Set true if using bucket",
        required: false,
      },
      {
        key: "recipients",
        dataType: "Integer",
        description: "If use bucket is true, use bucket ID else use recipient nunmber",
        required: true,
      },
      {
        key: "use_template",
        dataType: "Boolean",
        description: "Set true if template is to be used",
        required: false,
      },
      {
        key: "body",
        dataType: "String",
        description: "if use_template is true, use template ID else use message in text box",
        required: true,
      },
      {
        key: "sender",
        dataType: "String",
        description: "Optional. You can get it from route/:client_ID",
        required: false,
      },
    ],
  },
];

export const getAllCampaignResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{
        "status": "SUCCESS",
        "message": "campaigns retrieved successfully",
        "data": {
            "items": [
                {
                    "id": 1,
                    "name": "abc_123",
                    "client_id": 1,
                    "template_id": 1,
                    "bucket_id": 1,
                    "total": 2,
                    "created_at": "2024-02-29T11:27:13.000Z",
                    "created_by": null
                }
            ],
            "total": 1
        }
}`
  },
];

export const getCampaignResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{
        "status": "SUCCESS",
        "message": "campaign messages retrieved successfully",
        "data": {
            "items": [],
            "total": [
                {
                    "total": "0"
                }
            ]
        }
}`
  },
];

export const getAllCampaignStat = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{
        "status": "SUCCESS",
        "message": "statistics retrieved successfully",
        "data": {
            "submitted": 0,
            "invalid": 0,
            "sent": 1,
            "absent": 0,
            "failed": 0,
            "delivered": 19,
            "deliveryFailed": 2
        }
}`
  },
];
export const getCampaignStat = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{
        "status": "SUCCESS",
        "message": "campaign statistics retrieved successfully",
        "data": {
            "submitted": 0,
            "invalid": 0,
            "sent": 1,
            "absent": 0,
            "failed": 0,
            "delivered": 19,
            "deliveryFailed": 2
        }
}`
  },
];

export const getMessageByPhone = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{
        "status": "SUCCESS",
        "message": "phone messages retrieved successfully",
        "data": {
            "items": [],
            "total": [
                {
                    "total": "0"
                }
            ]
        }
}`
  },
];

export const getHourlyStat = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors.greenColor,
    code: `{
        "status": "SUCCESS",
        "message": "hourly statistics retrieved successfully",
        "data": {
            "submitted_count": 0,
            "sent_count": 0,
            "invalid_count": 0,
            "successful_count": 0,
            "failed_count": 0,
            "absent_count": 0,
            "avg_queue_time": 0,
            "avg_delivery_time": 0,
            "oldest_on_queue": null,
            "queue_count": null,
            "detail": [
                {
                    "hour": "00:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "01:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "02:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "03:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "04:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "05:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "06:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "07:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "08:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "09:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "10:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "11:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "12:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "13:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "14:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "15:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "16:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "17:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "18:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "19:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "20:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "21:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "22:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                },
                {
                    "hour": "23:00",
                    "submitted_count": 0,
                    "sent_count": 0,
                    "invalid_count": 0,
                    "successful_count": 0,
                    "failed_count": 0,
                    "absent_count": 0
                }
            ]
        }
}`
  },
];
