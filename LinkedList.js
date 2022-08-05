/**
*   @class LinkedListNode
*   @return {LinkedListNode}
*/
class LinkedListNode
{
    constructor()
    {
        this.next   = null;
        this.prev   = null;
    }
    index()
    {
        var current = this;
        var index   = 0;
        while ( current && current.prev )
        {
            current = current.prev;
            index ++;
        }
        return index;
    }
}

/**
*   @class LinkedList
*   @return {LinkedList}
*/
class LinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.size = null;
    }

    prepend($node)
    {
        this.insertBefore($node, this.head);
    }

    append($node)
    {
        this.insertBefore($node, null);
    }

    delete( $node )
    {
        if( $node.prev )
            $node.prev.next = ( $node.next ) ? $node.next : null;
        if( $node.next )
            $node.next.prev = ( $node.prev ) ? $node.prev : null;

        if( $node == this.head )
            this.head = this.head.next;

        if( $node == this.tail )
            this.tail = this.tail.prev;

        $node.prev = null;
        $node.next = null;
        this.size--;
    }

    /**
    *   @method insertBefore
    *   @param Node
    *   @param Node
    *
    *   @return {Void}
    *   @NOTE
    *         Inserts new node in the linked list before the $refNode param,
    *         if $refNode == null then insert the $newNode as last child
    **/
    insertBefore( $newNode, $refNode = null )
    {
        $newNode.next = $refNode;

        // if list is empty
        if( this.head == null )
        {
            $newNode.prev  = null;
            this.head      = $newNode;
            this.tail      = $newNode;
        }
        else if( !$refNode ) // if there is no referense node then we append to the end
        {
            this.tail.next = $newNode;
            $newNode.prev  = this.tail;
            this.tail      = $newNode;
        }
        else
        {
            $newNode.prev = $refNode.prev;
            if( $refNode.prev !== null )
                $refNode.prev.next = $newNode;

            $refNode.prev = $newNode;

            if( this.head === $refNode )
                this.head = $newNode;
        }

        this.size++;
    }

    clear()
    {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    reverse()
    {
        var current      = this.head;
        var previous     = null;
        var next_current = null;
        var reversed     = false;

        while( !reversed )
        {
            if( current.next == null )
            {
                this.tail = this.head;
                this.head = current;
                reversed  = true;
            }
            next_current = current.next;
            current.next = previous;
            current.prev = next_current;
            previous     = current;
            current      = next_current;
        }

        /**
        *    FROM : null <- 1, 2, 3, 4 -> null
        *    TO.  : null <- 4, 3, 2, 1 -> null
        *    # iterations view :
        *    1 -> null | 2 <- 1
        *    2 -> 1    | 3 <- 2
        *    3 -> 2    | 4 <- 3
        *    4 -> 3    | null <- 4
        **/
    }
}
