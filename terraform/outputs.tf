// Terraform outputs
output "eks_cluster_name" {
  description = "Name of the EKS cluster"
  value       = module.eks.cluster_name
}

output "eks_cluster_endpoint" {
  description = "EKS cluster endpoint"
  value       = module.eks.cluster_endpoint
}

output "eks_kubeconfig" {
  description = "Kubeconfig for accessing the EKS cluster"
  value       = module.eks.kubeconfig
  sensitive   = true
}

output "rds_endpoint" {
  description = "RDS PostgreSQL endpoint"
  value       = aws_db_instance.postgres.address
}

output "rds_db_name" {
  description = "RDS PostgreSQL DB name"
  value       = aws_db_instance.postgres.name
}
