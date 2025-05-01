provider "aws" {
  region = "eu-west-2"  # or your preferred region
}

resource "aws_s3_bucket" "portfolio" {
  bucket = "shaun-portfolio-site"  # must be globally unique
  # acl is deprecated; use bucket policy for public access
  # Access control is handled by the aws_s3_bucket_policy resource

  # Website configuration is now handled in the aws_s3_bucket_website_configuration resource
}

resource "aws_s3_bucket_public_access_block" "allow_public_policy" {
  bucket = aws_s3_bucket.portfolio.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "allow_public_access" {
  bucket = aws_s3_bucket.portfolio.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect    = "Allow",
      Principal = "*",
      Action    = ["s3:GetObject"],
      Resource  = "${aws_s3_bucket.portfolio.arn}/*"
    }]
  })
}

resource "aws_s3_bucket_website_configuration" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  index_document {
    suffix = "index.html"
  }
}
