// AWS SAA Terms Dictionary - Solutions Architect Associate 頻出用語
const AWS_TERMS = [
    // === 基本概念・アーキテクチャ ===
    {
        "term": "AWS",
        "aliases": ["Amazon Web Services"],
        "definition": "Amazonが提供するクラウドコンピューティングプラットフォームです。仮想サーバー、ストレージ、データベースなど200以上のサービスを提供しています。",
        "category": "基本概念"
    },
    {
        "term": "リージョン",
        "aliases": ["AWS Region", "Region"],
        "definition": "AWSのデータセンターが集約された地理的な場所です。各リージョンは独立しており、災害対策や法的要件に対応できます。",
        "category": "基本概念"
    },
    {
        "term": "アベイラビリティゾーン",
        "aliases": ["AZ", "Availability Zone"],
        "definition": "リージョン内の物理的に分離されたデータセンターです。高可用性を実現するため、複数のAZにリソースを分散配置します。",
        "category": "基本概念"
    },
    {
        "term": "エッジロケーション",
        "aliases": ["Edge Location"],
        "definition": "CloudFrontやGlobal Acceleratorで使用される、世界中に配置されたキャッシュサーバーです。ユーザーに近い場所からコンテンツを配信します。",
        "category": "基本概念"
    },
    {
        "term": "Well-Architected Framework",
        "aliases": ["WAF", "Well-Architected"],
        "definition": "AWSが提唱する、セキュリティ、信頼性、パフォーマンス効率、コスト最適化、運用の優秀性の5つの柱からなるアーキテクチャ設計原則です。",
        "category": "基本概念"
    },

    // === コンピューティング ===
    {
        "term": "EC2",
        "aliases": ["Amazon Elastic Compute Cloud", "EC2インスタンス", "インスタンス"],
        "definition": "仮想サーバーを提供するAWSのコンピューティングサービスです。スケーラブルで柔軟な仮想マシンを簡単に起動・管理できます。",
        "category": "コンピューティング"
    },
    {
        "term": "インスタンスタイプ",
        "aliases": ["Instance Type"],
        "definition": "EC2インスタンスのCPU、メモリ、ストレージ、ネットワーク性能の組み合わせです。用途に応じてt3、m5、c5、r5、i3などのファミリーがあります。",
        "category": "コンピューティング"
    },
    {
        "term": "AMI",
        "aliases": ["Amazon Machine Image"],
        "definition": "EC2インスタンスの起動に必要なOSやアプリケーションの設定を含むテンプレートです。独自のAMIを作成して再利用できます。",
        "category": "コンピューティング"
    },
    {
        "term": "キーペア",
        "aliases": ["Key Pair"],
        "definition": "EC2インスタンスへの安全なSSHアクセスを提供する公開鍵暗号方式の鍵ペアです。プライベートキーでインスタンスにログインできます。",
        "category": "コンピューティング"
    },
    {
        "term": "Auto Scaling",
        "aliases": ["Amazon EC2 Auto Scaling", "ASG", "Auto Scaling Group"],
        "definition": "需要に応じてEC2インスタンスの数を自動的に調整するサービスです。コスト最適化とパフォーマンス維持を両立できます。",
        "category": "コンピューティング"
    },
    {
        "term": "Launch Template",
        "aliases": ["起動テンプレート"],
        "definition": "EC2インスタンスの起動設定を定義するテンプレートです。AMI、インスタンスタイプ、セキュリティグループなどを事前設定できます。",
        "category": "コンピューティング"
    },
    {
        "term": "Lambda",
        "aliases": ["AWS Lambda"],
        "definition": "サーバーレスコンピューティングサービスです。サーバーの管理なしにコードを実行でき、イベント駆動型の処理に最適です。",
        "category": "コンピューティング"
    },
    {
        "term": "Elastic Beanstalk",
        "aliases": ["AWS Elastic Beanstalk"],
        "definition": "WebアプリケーションとAPIの簡単なデプロイと管理を提供するPaaSサービスです。容量プロビジョニング、負荷分散、自動スケーリングを自動化します。",
        "category": "コンピューティング"
    },
    {
        "term": "ECS",
        "aliases": ["Amazon Elastic Container Service"],
        "definition": "Dockerコンテナを大規模に実行・管理するためのフルマネージド型コンテナオーケストレーションサービスです。",
        "category": "コンピューティング"
    },
    {
        "term": "EKS",
        "aliases": ["Amazon Elastic Kubernetes Service"],
        "definition": "Kubernetesクラスターを簡単に実行できるマネージド型Kubernetesサービスです。コントロールプレーンの管理が不要です。",
        "category": "コンピューティング"
    },
    {
        "term": "Fargate",
        "aliases": ["AWS Fargate"],
        "definition": "ECSとEKS向けのサーバーレスコンピューティングエンジンです。サーバーやクラスターの管理なしにコンテナを実行できます。",
        "category": "コンピューティング"
    },

    // === ストレージ ===
    {
        "term": "S3",
        "aliases": ["Amazon Simple Storage Service", "S3バケット"],
        "definition": "オブジェクトストレージサービスです。Webサイト、バックアップ、データアーカイブなど様々な用途でファイルを保存できます。",
        "category": "ストレージ"
    },
    {
        "term": "S3ストレージクラス",
        "aliases": ["Storage Class"],
        "definition": "S3のデータアクセスパターンに応じた料金体系です。Standard、IA、Glacier、Deep Archiveなどがあり、用途に応じて選択します。",
        "category": "ストレージ"
    },
    {
        "term": "S3 Glacier",
        "aliases": ["Amazon S3 Glacier"],
        "definition": "長期アーカイブ用の低コストストレージサービスです。データの取得に時間がかかりますが、非常に安価にデータを保存できます。",
        "category": "ストレージ"
    },
    {
        "term": "EBS",
        "aliases": ["Elastic Block Store"],
        "definition": "EC2インスタンス用の永続的なブロックストレージです。高性能で信頼性の高いストレージボリュームを提供します。",
        "category": "ストレージ"
    },
    {
        "term": "EBSボリュームタイプ",
        "aliases": ["Volume Type"],
        "definition": "EBSの性能特性による分類です。gp3、gp2（汎用SSD）、io2、io1（プロビジョンドIOPS SSD）、st1、sc1（HDD）があります。",
        "category": "ストレージ"
    },
    {
        "term": "EBSスナップショット",
        "aliases": ["Snapshot"],
        "definition": "EBSボリュームの特定時点でのバックアップです。S3に保存され、新しいボリュームの作成やデータ復旧に使用できます。",
        "category": "ストレージ"
    },
    {
        "term": "EFS",
        "aliases": ["Elastic File System"],
        "definition": "複数のEC2インスタンスから同時にアクセス可能な共有ファイルシステムです。NFSプロトコルを使用します。",
        "category": "ストレージ"
    },
    {
        "term": "FSx",
        "aliases": ["Amazon FSx"],
        "definition": "フルマネージド型のファイルシステムサービスです。Windows File ServerやLustreファイルシステムを提供します。",
        "category": "ストレージ"
    },
    {
        "term": "Storage Gateway",
        "aliases": ["AWS Storage Gateway"],
        "definition": "オンプレミス環境とAWSクラウドストレージを接続するハイブリッドクラウドストレージサービスです。",
        "category": "ストレージ"
    },

    // === データベース ===
    {
        "term": "RDS",
        "aliases": ["Amazon Relational Database Service"],
        "definition": "マネージドリレーショナルデータベースサービスです。MySQL、PostgreSQL、Oracle、SQL Server、MariaDBなどを簡単にセットアップ・運用できます。",
        "category": "データベース"
    },
    {
        "term": "Aurora",
        "aliases": ["Amazon Aurora"],
        "definition": "MySQLおよびPostgreSQL互換のクラウドネイティブリレーショナルデータベースです。従来のデータベースより高速で高可用性を実現します。",
        "category": "データベース"
    },
    {
        "term": "DynamoDB",
        "aliases": ["Amazon DynamoDB"],
        "definition": "フルマネージドNoSQLデータベースサービスです。高速で予測可能な性能を提供し、シームレスな拡張が可能です。",
        "category": "データベース"
    },
    {
        "term": "ElastiCache",
        "aliases": ["Amazon ElastiCache"],
        "definition": "インメモリキャッシュサービスです。RedisまたはMemcachedを使用してアプリケーションの応答速度を向上させます。",
        "category": "データベース"
    },
    {
        "term": "Redshift",
        "aliases": ["Amazon Redshift"],
        "definition": "クラウド上のデータウェアハウスサービスです。ペタバイト規模のデータ分析を高速で実行できます。",
        "category": "データベース"
    },
    {
        "term": "DocumentDB",
        "aliases": ["Amazon DocumentDB"],
        "definition": "MongoDB互換のフルマネージド型ドキュメントデータベースサービスです。JSON形式のドキュメントを格納・検索できます。",
        "category": "データベース"
    },
    {
        "term": "Neptune",
        "aliases": ["Amazon Neptune"],
        "definition": "グラフデータベースサービスです。複雑な関係性を持つデータの格納と高速クエリを提供します。",
        "category": "データベース"
    },
    {
        "term": "Database Migration Service",
        "aliases": ["DMS", "AWS DMS"],
        "definition": "データベースの移行を支援するサービスです。異なるデータベースエンジン間でのデータ移行を自動化できます。",
        "category": "データベース"
    },

    // === ネットワーキング ===
    {
        "term": "VPC",
        "aliases": ["Virtual Private Cloud"],
        "definition": "AWS内に論理的に分離されたプライベートネットワークを作成するサービスです。セキュリティとネットワーク制御を強化できます。",
        "category": "ネットワーキング"
    },
    {
        "term": "サブネット",
        "aliases": ["Subnet"],
        "definition": "VPC内のIPアドレス範囲の一部です。パブリックサブネットとプライベートサブネットに分けてセキュリティを強化できます。",
        "category": "ネットワーキング"
    },
    {
        "term": "インターネットゲートウェイ",
        "aliases": ["IGW", "Internet Gateway"],
        "definition": "VPCとインターネット間の通信を可能にするコンポーネントです。パブリックサブネットのリソースがインターネットにアクセスできます。",
        "category": "ネットワーキング"
    },
    {
        "term": "NATゲートウェイ",
        "aliases": ["NAT Gateway"],
        "definition": "プライベートサブネットのリソースがインターネットにアクセスするためのマネージド型NATサービスです。",
        "category": "ネットワーキング"
    },
    {
        "term": "NATインスタンス",
        "aliases": ["NAT Instance"],
        "definition": "EC2インスタンスを使用したNAT機能です。NATゲートウェイより低コストですが、管理が必要です。",
        "category": "ネットワーキング"
    },
    {
        "term": "ルートテーブル",
        "aliases": ["Route Table"],
        "definition": "VPC内のネットワークトラフィックの経路を決定するルーティングルールの集合です。各サブネットに関連付けられます。",
        "category": "ネットワーキング"
    },
    {
        "term": "セキュリティグループ",
        "aliases": ["Security Group", "SG"],
        "definition": "EC2インスタンスレベルの仮想ファイアウォールです。インバウンドとアウトバウンドのトラフィックを制御します。",
        "category": "ネットワーキング"
    },
    {
        "term": "NACL",
        "aliases": ["Network ACL", "Network Access Control List"],
        "definition": "サブネットレベルの任意のファイアウォールです。サブネット内外のトラフィックを制御し、セキュリティグループと組み合わせて多重防御を実現します。",
        "category": "ネットワーキング"
    },
    {
        "term": "VPCピアリング",
        "aliases": ["VPC Peering"],
        "definition": "2つのVPC間でプライベート通信を可能にする機能です。同一リージョンまたは異なるリージョン間で接続できます。",
        "category": "ネットワーキング"
    },
    {
        "term": "Transit Gateway",
        "aliases": ["AWS Transit Gateway", "TGW"],
        "definition": "複数のVPCとオンプレミスネットワークを中央ハブ経由で接続するネットワーク中継サービスです。",
        "category": "ネットワーキング"
    },
    {
        "term": "VPN Gateway",
        "aliases": ["Virtual Private Network Gateway", "VGW"],
        "definition": "VPCとオンプレミスネットワーク間にセキュアなVPN接続を確立するためのゲートウェイです。",
        "category": "ネットワーキング"
    },
    {
        "term": "Direct Connect",
        "aliases": ["AWS Direct Connect", "DX"],
        "definition": "オンプレミスからAWSへの専用ネットワーク接続サービスです。インターネット経由より安定した高速通信を提供します。",
        "category": "ネットワーキング"
    },
    {
        "term": "ELB",
        "aliases": ["Elastic Load Balancer", "Load Balancer"],
        "definition": "複数のEC2インスタンスやコンテナにトラフィックを自動的に分散するロードバランサーサービスです。",
        "category": "ネットワーキング"
    },
    {
        "term": "ALB",
        "aliases": ["Application Load Balancer"],
        "definition": "レイヤー7（HTTP/HTTPS）で動作するロードバランサーです。パスベースやホストベースのルーティングが可能です。",
        "category": "ネットワーキング"
    },
    {
        "term": "NLB",
        "aliases": ["Network Load Balancer"],
        "definition": "レイヤー4（TCP/UDP）で動作する超高性能ロードバランサーです。低レイテンシと高スループットを実現します。",
        "category": "ネットワーキング"
    },
    {
        "term": "CLB",
        "aliases": ["Classic Load Balancer"],
        "definition": "従来のロードバランサーです。レイヤー4とレイヤー7の両方に対応しますが、現在は新規作成が推奨されていません。",
        "category": "ネットワーキング"
    },
    {
        "term": "Route 53",
        "aliases": ["Amazon Route 53"],
        "definition": "スケーラブルなドメインネームシステム（DNS）Webサービスです。ドメイン登録、DNS ルーティング、ヘルスチェック機能を提供します。",
        "category": "ネットワーキング"
    },
    {
        "term": "CloudFront",
        "aliases": ["Amazon CloudFront"],
        "definition": "コンテンツ配信ネットワーク（CDN）サービスです。世界中のエッジロケーションからコンテンツを高速配信できます。",
        "category": "ネットワーキング"
    },
    {
        "term": "API Gateway",
        "aliases": ["Amazon API Gateway"],
        "definition": "RESTやWebSocket APIの作成、公開、管理を行うフルマネージドサービスです。認証、スロットリング、監視機能を提供します。",
        "category": "ネットワーキング"
    },

    // === セキュリティ・認証 ===
    {
        "term": "IAM",
        "aliases": ["Identity and Access Management"],
        "definition": "AWSリソースへのアクセスを安全に制御するサービスです。ユーザー、グループ、ロール、ポリシーを管理できます。",
        "category": "セキュリティ"
    },
    {
        "term": "IAMユーザー",
        "aliases": ["IAM User"],
        "definition": "AWS内で作成される個別の ID です。長期的な認証情報を持ち、特定の人や アプリケーションに対応します。",
        "category": "セキュリティ"
    },
    {
        "term": "IAMグループ",
        "aliases": ["IAM Group"],
        "definition": "複数のIAMユーザーをまとめて管理するための仕組みです。グループにポリシーを割り当てることで、権限管理を効率化できます。",
        "category": "セキュリティ"
    },
    {
        "term": "IAMロール",
        "aliases": ["IAM Role"],
        "definition": "特定の権限セットを定義し、信頼できるエンティティが一時的に引き受けることができる認証情報です。",
        "category": "セキュリティ"
    },
    {
        "term": "IAMポリシー",
        "aliases": ["IAM Policy"],
        "definition": "JSON形式で記述される権限の定義です。誰が、何に対して、どのような操作を許可または拒否するかを指定します。",
        "category": "セキュリティ"
    },
    {
        "term": "STS",
        "aliases": ["Security Token Service", "AWS STS"],
        "definition": "一時的なセキュリティ認証情報を付与するサービスです。IAMロールの引き受けやフェデレーション認証で使用されます。",
        "category": "セキュリティ"
    },
    {
        "term": "MFA",
        "aliases": ["Multi-Factor Authentication", "多要素認証"],
        "definition": "パスワードに加えて、追加の認証要素を要求するセキュリティ機能です。セキュリティを大幅に向上させます。",
        "category": "セキュリティ"
    },
    {
        "term": "KMS",
        "aliases": ["Key Management Service", "AWS KMS"],
        "definition": "暗号化キーの作成と管理を行うマネージドサービスです。データの暗号化と復号化を安全に実行できます。",
        "category": "セキュリティ"
    },
    {
        "term": "CloudHSM",
        "aliases": ["AWS CloudHSM"],
        "definition": "専用のハードウェアセキュリティモジュールを提供するサービスです。FIPS 140-2 Level 3認証済みのHSMで暗号化キーを管理できます。",
        "category": "セキュリティ"
    },
    {
        "term": "Secrets Manager",
        "aliases": ["AWS Secrets Manager"],
        "definition": "データベースの認証情報、APIキー、その他のシークレットを安全に保存・管理するサービスです。自動ローテーション機能も提供します。",
        "category": "セキュリティ"
    },
    {
        "term": "Systems Manager Parameter Store",
        "aliases": ["Parameter Store", "SSM Parameter Store"],
        "definition": "設定データと秘密情報を階層的に保存するサービスです。無料でパラメータを管理でき、KMSとの統合も可能です。",
        "category": "セキュリティ"
    },
    {
        "term": "Certificate Manager",
        "aliases": ["ACM", "AWS Certificate Manager"],
        "definition": "SSL/TLS証明書をプロビジョニング、管理、デプロイするサービスです。証明書の自動更新により運用負荷を軽減します。",
        "category": "セキュリティ"
    },
    {
        "term": "WAF",
        "aliases": ["Web Application Firewall", "AWS WAF"],
        "definition": "WebアプリケーションをSQLインジェクション、XSSなどの攻撃から保護するファイアウォールサービスです。",
        "category": "セキュリティ"
    },
    {
        "term": "Shield",
        "aliases": ["AWS Shield"],
        "definition": "DDoS攻撃からAWSリソースを保護するマネージド型脅威保護サービスです。StandardとAdvancedの2つのレベルがあります。",
        "category": "セキュリティ"
    },
    {
        "term": "GuardDuty",
        "aliases": ["Amazon GuardDuty"],
        "definition": "機械学習を使用して悪意のあるアクティビティや不正な行動を検出する脅威検出サービスです。",
        "category": "セキュリティ"
    },
    {
        "term": "Inspector",
        "aliases": ["Amazon Inspector"],
        "definition": "EC2インスタンスとコンテナイメージの脆弱性を自動的に評価するセキュリティ評価サービスです。",
        "category": "セキュリティ"
    },
    {
        "term": "Macie",
        "aliases": ["Amazon Macie"],
        "definition": "S3に保存されたデータの機密性を機械学習で分析し、個人情報や機密データを特定・保護するサービスです。",
        "category": "セキュリティ"
    },

    // === 監視・運用・管理 ===
    {
        "term": "CloudWatch",
        "aliases": ["Amazon CloudWatch"],
        "definition": "AWSリソースとアプリケーションの監視サービスです。メトリクス収集、ログ監視、アラーム設定ができます。",
        "category": "監視・運用"
    },
    {
        "term": "CloudWatch Logs",
        "aliases": ["CloudWatch Logs"],
        "definition": "ログファイルの監視、保存、アクセスを行うマネージドサービスです。EC2、Lambda、VPCフローログなどを一元管理できます。",
        "category": "監視・運用"
    },
    {
        "term": "CloudWatch Events",
        "aliases": ["EventBridge", "Amazon EventBridge"],
        "definition": "AWSサービスからのイベントをリアルタイムで受信し、対応するアクションを自動的に実行するイベント駆動サービスです。",
        "category": "監視・運用"
    },
    {
        "term": "CloudTrail",
        "aliases": ["AWS CloudTrail"],
        "definition": "AWSアカウント内でのAPI呼び出しを記録する監査サービスです。セキュリティ分析、リソース変更の追跡、コンプライアンス監査に使用されます。",
        "category": "監視・運用"
    },
    {
        "term": "X-Ray",
        "aliases": ["AWS X-Ray"],
        "definition": "分散アプリケーションの分析とデバッグを行うトレーシングサービスです。アプリケーションの性能ボトルネックを特定できます。",
        "category": "監視・運用"
    },
    {
        "term": "Systems Manager",
        "aliases": ["SSM", "AWS Systems Manager"],
        "definition": "AWSリソースの運用データを一元表示し、運用タスクを自動化するマネージドサービスです。パッチ管理、設定管理などが可能です。",
        "category": "監視・運用"
    },
    {
        "term": "CloudFormation",
        "aliases": ["AWS CloudFormation"],
        "definition": "AWSリソースをテンプレート（JSON/YAML）で定義し、Infrastructure as Codeを実現するサービスです。スタックとして一括管理できます。",
        "category": "監視・運用"
    },
    {
        "term": "Config",
        "aliases": ["AWS Config"],
        "definition": "AWSリソースの設定変更を継続的に記録・評価するサービスです。コンプライアンス監査と設定変更の追跡が可能です。",
        "category": "監視・運用"
    },
    {
        "term": "Trusted Advisor",
        "aliases": ["AWS Trusted Advisor"],
        "definition": "AWSアカウントのベストプラクティス遵守状況をチェックし、コスト最適化、セキュリティ、性能改善の推奨事項を提供するサービスです。",
        "category": "監視・運用"
    },
    {
        "term": "Personal Health Dashboard",
        "aliases": ["PHD"],
        "definition": "お客様のAWSリソースに影響する可能性のあるイベントと変更を個人化されたビューで表示するサービスです。",
        "category": "監視・運用"
    },

    // === 分析・機械学習 ===
    {
        "term": "Redshift",
        "aliases": ["Amazon Redshift"],
        "definition": "クラウド上のデータウェアハウスサービスです。ペタバイト規模のデータ分析を高速で実行できます。",
        "category": "分析・AI/ML"
    },
    {
        "term": "EMR",
        "aliases": ["Amazon EMR", "Elastic MapReduce"],
        "definition": "Apache Spark、Hadoop、HBaseなどのビッグデータフレームワークを簡単に実行できるマネージドクラスターサービスです。",
        "category": "分析・AI/ML"
    },
    {
        "term": "Kinesis",
        "aliases": ["Amazon Kinesis"],
        "definition": "リアルタイムデータストリーミングプラットフォームです。Data Streams、Data Firehose、Data Analytics、Video Streamsの4つのサービスで構成されます。",
        "category": "分析・AI/ML"
    },
    {
        "term": "Athena",
        "aliases": ["Amazon Athena"],
        "definition": "S3のデータに対してSQLクエリを直接実行できるサーバーレス対話型クエリサービスです。ETL処理が不要で迅速な分析が可能です。",
        "category": "分析・AI/ML"
    },
    {
        "term": "QuickSight",
        "aliases": ["Amazon QuickSight"],
        "definition": "機械学習を活用したビジネスインテリジェンス（BI）サービスです。データの可視化とインサイト発見を支援します。",
        "category": "分析・AI/ML"
    },
    {
        "term": "Glue",
        "aliases": ["AWS Glue"],
        "definition": "サーバーレスなETL（Extract, Transform, Load）サービスです。データの検出、変換、移行を自動化できます。",
        "category": "分析・AI/ML"
    },
    {
        "term": "SageMaker",
        "aliases": ["Amazon SageMaker"],
        "definition": "機械学習モデルの構築、トレーニング、デプロイを行うフルマネージドサービスです。データサイエンティストと開発者向けの包括的なMLプラットフォームです。",
        "category": "分析・AI/ML"
    },

    // === アプリケーション統合 ===
    {
        "term": "SQS",
        "aliases": ["Simple Queue Service", "Amazon SQS"],
        "definition": "フルマネージド型メッセージキューイングサービスです。アプリケーション間の疎結合を実現し、メッセージの信頼性の高い配信を保証します。",
        "category": "アプリケーション統合"
    },
    {
        "term": "SNS",
        "aliases": ["Simple Notification Service", "Amazon SNS"],
        "definition": "フルマネージド型のpub/sub（パブリッシュ/サブスクライブ）メッセージングサービスです。多数の受信者に同時にメッセージを配信できます。",
        "category": "アプリケーション統合"
    },
    {
        "term": "SES",
        "aliases": ["Simple Email Service", "Amazon SES"],
        "definition": "スケーラブルなEメール送信サービスです。トランザクショナルメール、マーケティングメール、通知メールの配信が可能です。",
        "category": "アプリケーション統合"
    },
    {
        "term": "Step Functions",
        "aliases": ["AWS Step Functions"],
        "definition": "サーバーレスワークフローサービスです。Lambdaなどのサービスを組み合わせて複雑なビジネスロジックを視覚的に構築できます。",
        "category": "アプリケーション統合"
    },

    // === その他重要概念 ===
    {
        "term": "Elastic IP",
        "aliases": ["EIP"],
        "definition": "動的クラウドコンピューティング用に設計された静的IPv4アドレスです。インスタンスやネットワークインターフェースに関連付けできます。",
        "category": "基本概念"
    },
    {
        "term": "クラウドコンピューティング",
        "aliases": ["クラウド"],
        "definition": "インターネット経由でコンピューティングリソース（サーバー、ストレージ、データベースなど）を提供するサービスモデルです。",
        "category": "基本概念"
    },
    {
        "term": "仮想サーバー",
        "aliases": ["仮想マシン", "VM"],
        "definition": "物理サーバー上に作成される論理的なサーバーです。一つの物理マシン上で複数の仮想サーバーを動作させることができます。",
        "category": "基本概念"
    },
    {
        "term": "インフラ",
        "aliases": ["インフラストラクチャ", "ITインフラ"],
        "definition": "情報システムの基盤となるハードウェアやソフトウェアの総称です。サーバー、ネットワーク、ストレージなどが含まれます。",
        "category": "基本概念"
    },
    {
        "term": "スケーラビリティ",
        "aliases": ["拡張性"],
        "definition": "システムの負荷や要求の増加に応じて、性能や容量を柔軟に拡張できる能力のことです。",
        "category": "基本概念"
    },
    {
        "term": "可用性",
        "aliases": ["アベイラビリティ"],
        "definition": "システムが正常に稼働し続ける能力の指標です。通常はパーセンテージで表され、99.9%などと表現されます。",
        "category": "基本概念"
    },
    {
        "term": "耐久性",
        "aliases": ["デュラビリティ"],
        "definition": "データが失われることなく長期間保持される能力のことです。S3は99.999999999%（イレブンナイン）の耐久性を提供します。",
        "category": "基本概念"
    },
    {
        "term": "レイテンシ",
        "aliases": ["遅延"],
        "definition": "リクエストから応答までの遅延時間です。ネットワークやアプリケーションの性能指標として重要です。",
        "category": "基本概念"
    },
    {
        "term": "スループット",
        "aliases": ["処理能力"],
        "definition": "単位時間あたりに処理できるデータ量やリクエスト数です。システムの処理能力を示す指標です。",
        "category": "基本概念"
    },
    {
        "term": "フェイルオーバー",
        "aliases": ["Failover"],
        "definition": "システム障害時に自動的に待機系システムに切り替える仕組みです。サービス継続性を確保するための重要な機能です。",
        "category": "基本概念"
    },
    {
        "term": "災害復旧",
        "aliases": ["DR", "Disaster Recovery"],
        "definition": "自然災害やシステム障害からの復旧計画と手順です。RTO（目標復旧時間）とRPO（目標復旧地点）が重要な指標です。",
        "category": "基本概念"
    },
    {
        "term": "バックアップ",
        "aliases": ["Backup"],
        "definition": "データ損失に備えてデータの複製を作成・保存することです。定期的なバックアップは事業継続性に不可欠です。",
        "category": "基本概念"
    }
];

class ITDocumentAnalyzer {
    constructor() {
        this.terms = AWS_TERMS;
        this.detectedTerms = [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        console.log(`IT Document Analyzer initialized with ${this.terms.length} terms`);
    }

    setupEventListeners() {
        const analyzeBtn = document.getElementById('analyzeBtn');
        const clearBtn = document.getElementById('clearBtn');
        const documentText = document.getElementById('documentText');

        analyzeBtn.addEventListener('click', () => this.analyzeDocument());
        clearBtn.addEventListener('click', () => this.clearAll());
        
        // Enter key support for textarea
        documentText.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                this.analyzeDocument();
            }
        });
    }

    analyzeDocument() {
        const documentTextElement = document.getElementById('documentText');
        
        // First, get plain text by removing any existing highlighting
        let text = this.getPlainText();
        
        if (!text.trim()) {
            this.showError('文章を入力してください。');
            return;
        }

        this.showLoading(true);
        
        // Simulate processing time for better UX
        setTimeout(() => {
            this.detectedTerms = this.extractTerms(text);
            this.displayResults(text);
            this.showLoading(false);
        }, 300);
    }

    extractTerms(text) {
        const detected = [];
        const processedTerms = new Set(); // Prevent duplicate terms

        this.terms.forEach(termObj => {
            const { term, aliases, definition, category } = termObj;
            const allVariants = [term, ...(aliases || [])];

            allVariants.forEach(variant => {
                const regex = new RegExp(`\\b${this.escapeRegExp(variant)}\\b`, 'gi');
                const matches = text.match(regex);
                
                if (matches && !processedTerms.has(term.toLowerCase())) {
                    detected.push({
                        term,
                        definition,
                        category,
                        matchedVariant: variant,
                        occurrences: matches.length
                    });
                    processedTerms.add(term.toLowerCase());
                }
            });
        });

        // Sort by relevance (occurrences) and then alphabetically
        return detected.sort((a, b) => {
            if (b.occurrences !== a.occurrences) {
                return b.occurrences - a.occurrences;
            }
            return a.term.localeCompare(b.term, 'ja');
        });
    }

    displayResults(originalText) {
        const documentText = document.getElementById('documentText');
        this.displayHighlightedText(documentText, originalText);
        this.displayTermsList();
    }

    displayHighlightedText(textareaElement, text) {
        let highlightedText = text;

        // Debug logging
        console.log('Detected terms:', this.detectedTerms);
        console.log('Original text:', text);

        // Create a map of all terms and their variants for highlighting
        const termMap = new Map();
        this.detectedTerms.forEach(detected => {
            const termObj = this.terms.find(t => t.term === detected.term);
            if (termObj) {
                const allVariants = [termObj.term, ...(termObj.aliases || [])];
                allVariants.forEach(variant => {
                    termMap.set(variant.toLowerCase(), detected.term);
                });
            }
        });

        // Sort terms by length (longest first) to avoid partial replacements
        const sortedTerms = Array.from(termMap.keys()).sort((a, b) => b.length - a.length);

        sortedTerms.forEach(variant => {
            const mainTerm = termMap.get(variant);
            const regex = new RegExp(`\\b(${this.escapeRegExp(variant)})\\b`, 'gi');
            highlightedText = highlightedText.replace(regex, 
                `<span class="highlighted-term" data-term="${mainTerm}" title="${mainTerm}をクリックして詳細を表示">$1</span>`
            );
        });

        // Display in textarea by replacing original text with highlighted version
        textareaElement.value = highlightedText;
        textareaElement.style.display = 'none';
        
        // Create highlighted display div
        let highlightedDiv = document.getElementById('highlightedDisplay');
        if (!highlightedDiv) {
            highlightedDiv = document.createElement('div');
            highlightedDiv.id = 'highlightedDisplay';
            highlightedDiv.className = 'highlighted-display';
            textareaElement.parentNode.insertBefore(highlightedDiv, textareaElement.nextSibling);
        }
        
        highlightedDiv.innerHTML = highlightedText;
        highlightedDiv.classList.add('fade-in');

        // Add click listeners to highlighted terms
        const highlightedTerms = highlightedDiv.querySelectorAll('.highlighted-term');
        highlightedTerms.forEach(element => {
            element.addEventListener('click', (e) => {
                const termName = e.target.getAttribute('data-term');
                this.scrollToTerm(termName);
            });
        });
    }

    displayTermsList() {
        const termsList = document.getElementById('termsList');
        
        if (this.detectedTerms.length === 0) {
            termsList.innerHTML = '<p class="placeholder">検出された用語がありません</p>';
            return;
        }

        const termsHTML = this.detectedTerms.map(detected => `
            <div class="term-card" data-term="${detected.term}">
                <div class="term-title">
                    ${detected.term}
                    <span class="term-category">${detected.category}</span>
                </div>
                <div class="term-definition">${detected.definition}</div>
            </div>
        `).join('');

        termsList.innerHTML = termsHTML;
        termsList.classList.add('fade-in');

        // Add click listeners to term cards
        const termCards = termsList.querySelectorAll('.term-card');
        termCards.forEach(card => {
            card.addEventListener('click', () => {
                const termName = card.getAttribute('data-term');
                this.highlightTermInText(termName);
            });
        });
    }

    scrollToTerm(termName) {
        const termCard = document.querySelector(`[data-term="${termName}"]`);
        if (termCard) {
            termCard.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
            
            // Temporary highlight effect
            termCard.style.transform = 'scale(1.02)';
            termCard.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
            
            setTimeout(() => {
                termCard.style.transform = '';
                termCard.style.boxShadow = '';
            }, 1000);
        }
    }

    highlightTermInText(termName) {
        const highlightedTerms = document.querySelectorAll(`.highlighted-term[data-term="${termName}"]`);
        
        highlightedTerms.forEach(term => {
            term.style.background = 'linear-gradient(120deg, #667eea 0%, #764ba2 100%)';
            term.style.color = 'white';
            
            setTimeout(() => {
                term.style.background = '';
                term.style.color = '';
            }, 2000);
        });

        if (highlightedTerms.length > 0) {
            highlightedTerms[0].scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    }

    clearAll() {
        const documentText = document.getElementById('documentText');
        const highlightedDiv = document.getElementById('highlightedDisplay');
        
        documentText.value = '';
        documentText.style.display = 'block';
        
        if (highlightedDiv) {
            highlightedDiv.remove();
        }
        
        document.getElementById('termsList').innerHTML = 
            '<p class="placeholder">用語が検出されるとここに表示されます</p>';
        
        this.detectedTerms = [];
        documentText.focus();
    }

    showLoading(show) {
        const analyzeBtn = document.getElementById('analyzeBtn');
        
        if (show) {
            analyzeBtn.innerHTML = '<span class="loading"></span>解析中...';
            analyzeBtn.disabled = true;
        } else {
            analyzeBtn.innerHTML = '🔍 用語を解析';
            analyzeBtn.disabled = false;
        }
    }

    showError(message) {
        const termsList = document.getElementById('termsList');
        termsList.innerHTML = `
            <div style="color: #e53e3e; background: #fed7d7; padding: 15px; border-radius: 10px; text-align: center;">
                ⚠️ ${message}
            </div>
        `;
    }

    getPlainText() {
        const documentTextElement = document.getElementById('documentText');
        const highlightedDiv = document.getElementById('highlightedDisplay');
        
        // If there's a highlighted display, get plain text from it
        if (highlightedDiv && highlightedDiv.innerHTML) {
            // Remove HTML tags to get plain text
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = highlightedDiv.innerHTML;
            return tempDiv.textContent || tempDiv.innerText || '';
        }
        
        // Otherwise, get text from textarea
        return documentTextElement.value;
    }

    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ITDocumentAnalyzer();
});

// Add some sample usage instructions
window.addEventListener('load', () => {
    const documentText = document.getElementById('documentText');
    
    // Add sample text if textarea is focused and empty
    documentText.addEventListener('focus', () => {
        if (!documentText.value.trim()) {
            // Optional: You can add a sample text here
        }
    });
    
    console.log('🚀 IT Document Analyzer ready to use!');
    console.log('📝 Paste your AWS documentation and click "用語を解析" to get started.');
});