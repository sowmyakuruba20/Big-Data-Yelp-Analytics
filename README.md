# Big-Data-Yelp-Analytics
Scalable Big-Data Powered- Yelp User-Friendly AWS Analytics Platform for Business Review


Our design takes a Yelp dataset and stores it in Amazon s3. Amazon S3 connects with AWS Glue, Amazon EMR, AWS Athena, and AWS QuickSight for an efficient data flow. Yelp data is stored in S3 and transformed using AWS Glue. Amazon EMR, directly accessing data from S3, performs sentiment analysis. The processed data is cataloged in AWS Glue, making it queryable by AWS Athena. For visualization, we connected AWS QuickSight to Athena, allowing us to create interactive dashboards. These dashboards are embedded into our user interface using QuickSight's embed codes, enabling real-time, interactive data analysis within our application.
