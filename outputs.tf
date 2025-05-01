output "website_url" {
value = "https://${aws_s3_bucket.portfolio.bucket}.s3.${aws_s3_bucket.portfolio.region}.amazonaws.com/index.html"
}
