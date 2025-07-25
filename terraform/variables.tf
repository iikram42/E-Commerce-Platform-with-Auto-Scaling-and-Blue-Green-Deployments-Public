// Terraform variables
variable "region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-west-2"
}

variable "db_username" {
  description = "Username for the RDS PostgreSQL database"
  type        = string
  default     = "ecommerce_admin"
}

variable "db_password" {
  description = "Password for the RDS PostgreSQL database"
  type        = string
  sensitive   = true
}
