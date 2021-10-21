<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <!-- <xsl:template match="/">
        <html>
            <xsl:apply-template />
        </html>
    </xsl:template> -->

    <xsl:template match="class/textbookslist">


        <body bgcolor="white">

            <h1>My book collection</h1>
            <h1>
                <xsl:value-of select="tittle" />
            </h1>


            <table border="2">
                <tr bgcolor="red">
                    <th>Title</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Publisher</th>
                    <th>Website</th>
                    <th>Publication</th>
                    <th>ISBN</th>
                    <th>Edition</th>
                    <th>Cover</th>
                </tr>
                <xsl:for-each select="book">
                    <tr>
                        <td>
                            <xsl:value-of select="tittle" />
                        </td>

                        <td>
                            <xsl:value-of select="author/firstname" />
                        </td>

                        <td>
                            <xsl:value-of select="author/lastname" />
                        </td>

                        <td>
                            <xsl:value-of select="publisher" />
                        </td>

                        <td>
                            <xsl:value-of select="website" />
                        </td>

                        <td>
                            <xsl:value-of select="publication" />
                        </td>

                        <td>
                            <xsl:value-of select="ISBN" />
                        </td>

                        <td>
                            <xsl:value-of select="edition" />
                        </td>

                        <td>
                            <xsl:value-of select="cover" />
                        </td>

                    </tr>
                </xsl:for-each>
            </table>
        </body>
    </xsl:template>
</xsl:stylesheet>