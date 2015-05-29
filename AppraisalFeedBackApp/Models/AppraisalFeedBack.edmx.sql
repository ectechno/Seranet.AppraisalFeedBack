
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 05/26/2015 10:28:02
-- Generated from EDMX file: E:\dbackup\Projects\AppraisalFeedBackApp\AppraisalFeedBackApp\Models\AppraisalFeedBack.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [CustFeedBack];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_AppraisalAppraisee]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Appraisees] DROP CONSTRAINT [FK_AppraisalAppraisee];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Appraisals]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Appraisals];
GO
IF OBJECT_ID(N'[dbo].[Appraisees]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Appraisees];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Appraisals'
CREATE TABLE [dbo].[Appraisals] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [ProjectName] nvarchar(max)  NOT NULL,
    [AppraisalYear] smallint  NOT NULL,
    [AppraisalType] nvarchar(max)  NULL,
    [CustomerEmail] nvarchar(max)  NOT NULL,
    [AppraisalStatus] nvarchar(max)  NULL,
    [ValidationKey] nvarchar(max)  NULL
);
GO

-- Creating table 'Appraisees'
CREATE TABLE [dbo].[Appraisees] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [EmployeeId] int  NOT NULL,
    [EmployeeName] nvarchar(max)  NOT NULL,
    [AppraisalId] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Appraisals'
ALTER TABLE [dbo].[Appraisals]
ADD CONSTRAINT [PK_Appraisals]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Appraisees'
ALTER TABLE [dbo].[Appraisees]
ADD CONSTRAINT [PK_Appraisees]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [AppraisalId] in table 'Appraisees'
ALTER TABLE [dbo].[Appraisees]
ADD CONSTRAINT [FK_AppraisalAppraisee]
    FOREIGN KEY ([AppraisalId])
    REFERENCES [dbo].[Appraisals]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_AppraisalAppraisee'
CREATE INDEX [IX_FK_AppraisalAppraisee]
ON [dbo].[Appraisees]
    ([AppraisalId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------